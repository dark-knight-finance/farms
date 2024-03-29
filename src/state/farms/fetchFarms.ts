import BigNumber from 'bignumber.js'
import erc20 from 'config/abi/erc20.json'
import masterchefABI from 'config/abi/masterchef.json'
import multicall from 'utils/multicall'
import axios from 'axios'

import { getMasterChefAddress } from 'utils/addressHelpers'
import farmsConfig from 'config/constants/farms'
import { QuoteToken } from '../../config/constants/types'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

const fetchFarms = async () => {
  const data = await Promise.all(
    farmsConfig.map(async (farmConfig) => {
      const lpAdress = farmConfig.lpAddresses[CHAIN_ID]



      const calls = [
        // Balance of token in the LP contract
        {
          address: farmConfig.tokenAddresses[CHAIN_ID],
          name: 'balanceOf',
          params: [lpAdress],
        },
        // Balance of quote token on LP contract
        {
          address: farmConfig.quoteTokenAdresses[CHAIN_ID],
          name: 'balanceOf',
          params: [lpAdress],
        },
        // Balance of LP tokens in the master chef contract
        {
          address: farmConfig.isTokenOnly ? farmConfig.tokenAddresses[CHAIN_ID] : lpAdress,
          name: 'balanceOf',
          params: [getMasterChefAddress()],
        },
        // Total supply of LP tokens
        {
          address: lpAdress,
          name: 'totalSupply',
        },
        // Token decimals
        {
          address: farmConfig.tokenAddresses[CHAIN_ID],
          name: 'decimals',
        },
        // Quote token decimals
        {
          address: farmConfig.quoteTokenAdresses[CHAIN_ID],
          name: 'decimals',
        },
      ]


      const pricePerToken = await getTokenPrice(
        farmConfig.lpSymbol,
        farmConfig.isTokenOnly ? farmConfig.tokenAddresses[CHAIN_ID] : lpAdress,
        !farmConfig.isTokenOnly,
      )

      console.log("pricePerToken",pricePerToken)
      const [
        tokenBalanceLP,
        quoteTokenBlanceLP,
        lpTokenBalanceMC,
        lpTotalSupply,
        tokenDecimals,
        quoteTokenDecimals,
      ] = await multicall(erc20, calls)

      if (farmConfig.pid === 0) {
        console.log('pid')
        console.log(farmConfig.tokenAddresses[CHAIN_ID])
        console.log(tokenBalanceLP)
        console.log(farmConfig.quoteTokenAdresses[CHAIN_ID])
        console.log(quoteTokenBlanceLP)
        console.log(quoteTokenDecimals)
        console.log(tokenDecimals)
        console.log(lpTotalSupply)
      }

      let tokenAmount
      let lpTotalInQuoteToken
      let tokenPriceVsQuote
      if (farmConfig.isTokenOnly) {
        tokenAmount = new BigNumber(lpTokenBalanceMC).div(new BigNumber(10).pow(tokenDecimals))
        if (farmConfig.tokenSymbol === QuoteToken.USDC && farmConfig.quoteTokenSymbol === QuoteToken.USDC) {
          tokenPriceVsQuote = new BigNumber(1)
        } else {
          tokenPriceVsQuote = new BigNumber(quoteTokenBlanceLP).div(new BigNumber(tokenBalanceLP))
          if (farmConfig.quoteTokenSymbol === QuoteToken.USDC) {
            tokenPriceVsQuote = new BigNumber(quoteTokenBlanceLP)
              .div(new BigNumber(tokenBalanceLP))
              .times(new BigNumber(10).pow(12))
          }
          //  console.log("quote price" , tokenPriceVsQuote.toString());
        }
        lpTotalInQuoteToken = tokenAmount.times(tokenPriceVsQuote)
      } else {
        // Ratio in % a LP tokens that are in staking, vs the total number in circulation
        const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply))

        // Total value in staking in quote token value

        lpTotalInQuoteToken = new BigNumber(quoteTokenBlanceLP)
          .div(new BigNumber(10).pow(quoteTokenDecimals[0]))
          .times(new BigNumber(2))
          .times(lpTokenRatio)

        // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
        tokenAmount = new BigNumber(tokenBalanceLP).div(new BigNumber(10).pow(tokenDecimals)).times(lpTokenRatio)
        const quoteTokenAmount = new BigNumber(quoteTokenBlanceLP)
          .div(new BigNumber(10).pow(quoteTokenDecimals))
          .times(lpTokenRatio)

        if (tokenAmount.comparedTo(0) > 0) {
          tokenPriceVsQuote = quoteTokenAmount.div(tokenAmount)
        } else if (tokenAmount.comparedTo(0) <= 0) {
          if (quoteTokenDecimals[0] === 6) {
            tokenPriceVsQuote = new BigNumber(quoteTokenBlanceLP * 1000000000000).div(new BigNumber(tokenBalanceLP))
          } else {
            tokenPriceVsQuote = new BigNumber(quoteTokenBlanceLP).div(new BigNumber(tokenBalanceLP))
          }
        }
      }

      console.log('tokenprice', tokenPriceVsQuote.toNumber())

      const [info, totalAllocPoint, KnightPerBlock] = await multicall(masterchefABI, [
        {
          address: getMasterChefAddress(),
          name: 'poolInfo',
          params: [farmConfig.pid],
        },
        {
          address: getMasterChefAddress(),
          name: 'totalAllocPoint',
        },
        {
          address: getMasterChefAddress(),
          name: 'KnightPerBlock',
        },
      ])

      const allocPoint = new BigNumber(info.allocPoint._hex)
      const poolWeight = allocPoint.div(new BigNumber(totalAllocPoint))

      return {
        ...farmConfig,
        tokenAmount: tokenAmount.toJSON(),
        // quoteTokenAmount: quoteTokenAmount,
        lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
        tokenPriceVsQuote: tokenPriceVsQuote.toJSON(),
        poolWeight: poolWeight.toNumber(),
        multiplier: `${allocPoint.div(100).toString()}X`,
        depositFeeBP: info.depositFeeBP,
        pricePerToken,
        KnightPerBlock: new BigNumber(KnightPerBlock).toNumber(),
      }
    }),
  )
  return data
}


const getSingleTokenPrice = async (address) => {
  const url = `https://api.knightswap.financial/api/v2/assets/${address}`
  let price = 0
  try {
    const resp = await axios.get(url)
    price = resp.data.data.price_usd
  } catch (err) {
    console.error('getSingleTokenPrice', err)
  }

  console.log("getSingleTokenPrice",price)

  return price
}


const getLPTokenPrice = async (name,address) => {
  const data = {
    query: ` {
    pair(id:"${address.toLowerCase()}"){
      
      reserveUSD
      totalSupply
       
    }
  }`,
  }

  let price = 0
  try {
    const resp = await axios({
      url: 'https://api.thegraph.com/subgraphs/name/shahzeb8285/dark-knight-two',
      method: 'post',
      data,
    })

    console.log('getLPTokenPrice1114', name,
    )
    if(name === "THUNDER-BNB LP "){
      price = Number(resp.data.data.pair.totalSupply)/ Number(resp.data.data.pair.reserveUSD) 

    }else{
      price = Number(resp.data.data.pair.reserveUSD) / Number(resp.data.data.pair.totalSupply)
    }
  } catch (err) {
    console.error('getLPTokenPrice', err)
  }

  return price
}



const getTokenPrice = async (name,address, isLP) => {
  if (isLP) {
    return getLPTokenPrice(name,address)
  }
  return getSingleTokenPrice(address)
}




export default fetchFarms
