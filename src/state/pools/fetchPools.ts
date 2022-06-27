/* eslint import/no-cycle: [2, { maxDepth: 1 }] */

import poolsConfig from 'config/constants/pools'
import sousChefABI from 'config/abi/sousChef.json'
import cakeABI from 'config/abi/cake.json'
import wbnbABI from 'config/abi/weth.json'
import { QuoteToken } from 'config/constants/types'
import multicall from 'utils/multicall'
import { getWFTMAddress } from 'utils/addressHelpers'
import BigNumber from 'bignumber.js'
import erc20 from 'config/abi/erc20.json'
import { usePriceCakeBusd } from 'state/hooks'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

export const fetchPoolsBlockLimits = async () => {
  const poolsWithEnd = poolsConfig.filter((p) => p.sousId !== 0)
  const callsStartBlock = poolsWithEnd.map((poolConfig) => {
    return {
      address: poolConfig.contractAddress[CHAIN_ID],
      name: 'startBlock',
    }
  })
  const callsEndBlock = poolsWithEnd.map((poolConfig) => {
    return {
      address: poolConfig.contractAddress[CHAIN_ID],
      name: 'bonusEndBlock',
    }
  })

  const starts = await multicall(sousChefABI, callsStartBlock)
  const ends = await multicall(sousChefABI, callsEndBlock)

  return poolsWithEnd.map((cakePoolConfig, index) => {
    const startBlock = starts[index]
    const endBlock = ends[index]
    return {
      sousId: cakePoolConfig.sousId,
      startBlock: new BigNumber(startBlock).toJSON(),
      endBlock: new BigNumber(endBlock).toJSON(),
    }
  })
}

const getTokenPrice = async ({ tokenAddress, lpAddress, quoteTokenAddress, quoteTokenSymbol,rewardTokenDecimals=18 }) => {
  const calls = [
    // Balance of token in the LP contract
    {
      address: tokenAddress,
      name: 'balanceOf',
      params: [lpAddress],
    },
    // Balance of quote token on LP contract
    {
      address: quoteTokenAddress,
      name: 'balanceOf',
      params: [lpAddress],
    },
    // Balance of LP tokens in the master chef contract
    // {
    //   address: pool.isTokenOnly ? pool.tokenAddresses[CHAIN_ID] : lpAdress,
    //   name: 'balanceOf',
    //   // params: [getMasterChefAddress()],
    // },
    // // Total supply of LP tokens
    // {
    //   address: pool.lpAdress,
    //   name: 'totalSupply',
    // },
    // // Token decimals
    // {
    //   address: pool.tokenAddresses[CHAIN_ID],
    //   name: 'decimals',
    // },
    // // Quote token decimals
    // {
    //   address: pool.quoteTokenAdresses[CHAIN_ID],
    //   name: 'decimals',
    // },
  ]
  const [
    tokenBalanceLP,
    quoteTokenBlanceLP,
    // lpTokenBalanceMC,
    // lpTotalSupply,
    // tokenDecimals,
    // quoteTokenDecimals
  ] = await multicall(erc20, calls)

  let tokenPriceVsQuote
  if (quoteTokenSymbol === QuoteToken.BUSD) {
    tokenPriceVsQuote = new BigNumber(1)
  } else if(rewardTokenDecimals === 18){
      tokenPriceVsQuote = new BigNumber(quoteTokenBlanceLP).div(new BigNumber(tokenBalanceLP))
    
  }else{
    tokenPriceVsQuote = new BigNumber(quoteTokenBlanceLP).div(new BigNumber(tokenBalanceLP).multipliedBy(10**(18-rewardTokenDecimals)))
  }
  
 
  return tokenPriceVsQuote.toNumber()
}

const getPoolRewardTokenPrice = async (pools) => {
  const promises = []

  pools.map(async (pool) => {
    promises.push(getTokenPrice(pool.rewardTokenDetails))
  })

  const prices = await Promise.all(promises)
  return prices
}

export const fetchPoolsTotalStatking = async () => {
  const nonBnbPools = poolsConfig.filter((p) => p.stakingTokenName !== QuoteToken.BNB)
  const bnbPool = poolsConfig.filter((p) => p.stakingTokenName === QuoteToken.BNB)
  // const cakePrice = usePriceCakeBusd()


  const callsNonBnbPools = nonBnbPools.map((poolConfig) => {
    return {
      address: poolConfig.stakingTokenAddress,
      name: 'balanceOf',
      params: [poolConfig.contractAddress[CHAIN_ID]],
    }
  })

  const callsBnbPools = bnbPool.map((poolConfig) => {
    return {
      address: getWFTMAddress(),
      name: 'balanceOf',
      params: [poolConfig.contractAddress[CHAIN_ID]],
    }
  })

  const nonBnbPoolsTotalStaked = await multicall(cakeABI, callsNonBnbPools)
  const bnbPoolsTotalStaked = await multicall(wbnbABI, callsBnbPools)

  const nonBNBRewardTokenPricesInBNB = await getPoolRewardTokenPrice(nonBnbPools)

  const BNBRewardTokenPricesInBNB = await getPoolRewardTokenPrice(nonBnbPools)

  return [
    ...nonBnbPools.map((p, index) => ({
      sousId: p.sousId,
      rewardTokenPrice: nonBNBRewardTokenPricesInBNB[index],
      totalStaked: new BigNumber(nonBnbPoolsTotalStaked[index]).toJSON(),
    })),
    ...bnbPool.map((p, index) => ({
      sousId: p.sousId,
      rewardTokenPrice: BNBRewardTokenPricesInBNB[index],
      totalStaked: new BigNumber(bnbPoolsTotalStaked[index]).toJSON(),
    })),
  ]
}
