import BigNumber from 'bignumber.js'
import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmsPublicDataAsync } from './farms'
import { fetchPoolsPublicDataAsync, fetchPoolsUserDataAsync} from "./pools"
import { State, Farm, Pool } from './types'
import { QuoteToken } from '../config/constants/types'

const ZERO = new BigNumber(0)

export const useFetchPublicData = () => {
  const dispatch = useDispatch()
  const { slowRefresh } = useRefresh()
  useEffect(() => {
    dispatch(fetchFarmsPublicDataAsync())
    dispatch(fetchPoolsPublicDataAsync())
  }, [dispatch, slowRefresh])
}

// Farms

export const useFarms = (): Farm[] => {
  const farms = useSelector((state: State) => state.farms.data)
  return farms
}

export const usePool = (): Pool[] => {
  const pools = useSelector((state: State) => state.pools.data)
  return pools
}

export const useFarmFromPid = (pid): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.pid === pid))
  return farm
}

export const useFarmFromSymbol = (lpSymbol: string): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.lpSymbol === lpSymbol))
  return farm
}

export const useFarmUser = (pid) => {
  const farm = useFarmFromPid(pid)

  return {
    allowance: farm.userData ? new BigNumber(farm.userData.allowance) : new BigNumber(0),
    tokenBalance: farm.userData ? new BigNumber(farm.userData.tokenBalance) : new BigNumber(0),
    stakedBalance: farm.userData ? new BigNumber(farm.userData.stakedBalance) : new BigNumber(0),
    earnings: farm.userData ? new BigNumber(farm.userData.earnings) : new BigNumber(0),
  }
}

// Pools

export const usePools = (account): Pool[] => {
  const { fastRefresh } = useRefresh()
  const dispatch = useDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchPoolsUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const pools = useSelector((state: State) => state.pools.data)
  return pools
}

export const usePoolFromPid = (sousId): Pool => {
  const pool = useSelector((state: State) => state.pools.data.find((p) => p.sousId === sousId))
  return pool
}

// Prices

export const usePriceBnbBusd = (): BigNumber => {
  const pid = 2 // BUSD-BNB LP
  const farm = useFarmFromPid(pid)

  console.log('price', farm.tokenPriceVsQuote)

  return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO
}

export const useAnyFarmPrice = (pid): BigNumber => {
  const farm = useFarmFromPid(pid)
  return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO
}

// export const useLpTokenPrice = (pid: BigNumber) => {
//   const farm = useFarmFromPid(pid)
//   const farmTokenPriceInUsd = useAnyFarmPrice(pid)
//   let lpTokenPrice = BIG_ZERO

//   if (farm.lpTotalSupply.gt(0) && farm.lpTotalInQuoteToken.gt(0)) {
//     // Total value of base token in LP
//     const valueOfBaseTokenInFarm = farmTokenPriceInUsd.times(farm.tokenAmountTotal)
//     // Double it to get overall value in LP
//     const overallValueOfAllTokensInFarm = valueOfBaseTokenInFarm.times(2)
//     // Divide total value of all tokens, by the number of LP tokens
//     const totalLpTokens = getBalanceAmount(farm.lpTotalSupply)
//     lpTokenPrice = overallValueOfAllTokensInFarm.div(totalLpTokens)
//   }

//   return lpTokenPrice
// }

export const usePriceCakeBusd = (): BigNumber => {
  // const pid = 1 // CAKE-BNB LP
  // const bnbPriceUSD = usePriceBnbBusd()
  // const farm = useFarmFromPid(pid)
  // return farm.tokenPriceVsQuote ? bnbPriceUSD.times(farm.tokenPriceVsQuote) : ZERO
  const pid = 0 // EGG-BUSD LP
  const farm = useFarmFromPid(pid)

  // const farms = useFarmFromPid(6);
  // console.log("token prices",farms.tokenPriceVsQuote);

  console.log('token price', farm.tokenPriceVsQuote)

  return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO
}

export const useTotalValue = (): BigNumber => {
  const farms = useFarms()
  const pools = usePool()
  const bnbPrice = usePriceBnbBusd()
  const cakePrice = usePriceCakeBusd()
  let value = new BigNumber(0)
  for (let i = 0; i < farms.length; i++) {
    const farm = farms[i]
    if (farm.lpTotalInQuoteToken) {
      let val
      if (farm.quoteTokenSymbol === QuoteToken.FTM) {
        val = bnbPrice.times(farm.lpTotalInQuoteToken)
      } else if (farm.quoteTokenSymbol === QuoteToken.dKNIGHT) {
        val = cakePrice.times(farm.lpTotalInQuoteToken)
      } else {
        val = farm.lpTotalInQuoteToken
      }

      // console.log("pid",farm.pid);
      // console.log(val);

      value = value.plus(val)
    }
  }

  //  (pools)
  for (let i = 0; i < pools.length; i++) {
    const pool = pools[i]
    // total liquidity
    let poolValue = new BigNumber(0)
    if (pool.stakingTokenName === QuoteToken.dKNIGHT) {
      poolValue = new BigNumber(pool.totalStaked).div(new BigNumber(10).pow(18)).multipliedBy(cakePrice)
    }

    if (!poolValue.isNaN()) {
      value = value.plus(poolValue)
    }
  }

  return value
}
