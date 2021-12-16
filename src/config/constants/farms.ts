import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'dKNIGHT',
    lpAddresses: {
      4002: '0x7FcFc7451D07DE9c8fc2b58467bb2b9cC9A9CB6e',
      250: '0x68D47D67b893c44A72BCAC39b1b658D4Cbdf87CA',
    },
    tokenSymbol: 'dKNIGHT',
    tokenAddresses: {
      4002: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      250: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    },
    isTokenOnly: true,
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  {
    pid: 0,
    risk: 5,
    lpSymbol: 'dKnight-USDC LP',
    lpAddresses: {
      4002: '0xf633c7Fb7916eD97CD207cAEB3a46cEeA365396e',
      250: '0x68D47D67b893c44A72BCAC39b1b658D4Cbdf87CA',
    },
    tokenSymbol: 'dKNIGHT',
    tokenAddresses: {
      4002: '0x4E8733621cC3Ee2Da614485381C3b4A374921395',
      250: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  {
    pid: 1,
    risk: 5,
    lpSymbol: 'dKnight-FTM LP',
    lpAddresses: {
      4002: '0x69ef3F86cc1EA2844951D26A2373f00D2B717897',
      250: '0xD519AE779eb7987cdddA63be2CEffE0C35759E04',
    },
    tokenSymbol: 'dKNIGHT',
    tokenAddresses: {
      4002: '0x4E8733621cC3Ee2Da614485381C3b4A374921395',
      250: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'FTM-USDC LP',
    lpAddresses: {
      4002: '0x46F2cC2731f80Aa658B4408F9B533a0d19e9516E',
      250: '0xB733654453404AAb46d34E68fF24415F5f588C21',
    },
    tokenSymbol: 'FTM',
    tokenAddresses: {
      4002: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      250: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  {
    pid: 4,
    risk: 3,
    lpSymbol: 'UNDEAD-FTM LP',
    lpAddresses: {
      4002: '0x46F2cC2731f80Aa658B4408F9B533a0d19e9516E',
      250: '0xBfBC8eeC9d24eb10702D7F233d6cf687D8F1b2b4',
    },
    tokenSymbol: 'Undead',
    tokenAddresses: {
      4002: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      250: '0x551C61DB482289994e7d426Fc4DB6493918bB81D',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },



  {
    pid: 6,
    risk: 3,
    lpSymbol: 'WETH-FTM LP',
    lpAddresses: {
      4002: '0x46F2cC2731f80Aa658B4408F9B533a0d19e9516E',
      250: '0xbe612c02bee4b9feb6b38693510c6c2a2028866d',
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      4002: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      250: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },


  {
    pid: 7,
    risk: 3,
    lpSymbol: 'FUSDT-USDC LP',
    lpAddresses: {
      4002: '0x46F2cC2731f80Aa658B4408F9B533a0d19e9516E',
      250: '0x10ee429ed505498e84f071460716dd0b9068f29f',
    },
    tokenSymbol: 'FUSDT',
    tokenAddresses: {
      4002: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      250: '0x049d68029688eabf473097a2fc38ef61633a3c7a',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },



  {
    pid: 8,
    risk: 3,
    lpSymbol: 'WBTC-FTM LP',
    lpAddresses: {
      4002: '0x46F2cC2731f80Aa658B4408F9B533a0d19e9516E',
      250: '0xedd43f16aef83960ab7b3f2f66835e1e6e0cfb33',
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      4002: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      250: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },

  {
    pid: 9,
    risk: 3,
    lpSymbol: 'DAI-FTM LP',
    lpAddresses: {
      4002: '0x46F2cC2731f80Aa658B4408F9B533a0d19e9516E',
      250: '0x4f4a0b4cf5ba98264a67726633d3cdef392411a9',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      4002: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      250: '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },


  {
    pid: 10,
    risk: 3,
    lpSymbol: 'FATCAKE-FTM LP',
    lpAddresses: {
      4002: '0x46F2cC2731f80Aa658B4408F9B533a0d19e9516E',
      250: '0x8b65868407f3c60C405d2AF096c92247Ed1F7c33',
    },
    tokenSymbol: 'FATCAKE',
    tokenAddresses: {
      4002: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      250: '0x4a3DCE89cA816D4F10864664B6503df95a92d879',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },


  {
    pid: 11,
    risk: 3,
    lpSymbol: 'DEFI-FTM LP',
    lpAddresses: {
      4002: '0x46F2cC2731f80Aa658B4408F9B533a0d19e9516E',
      250: '0x6B94F5C3944CEb619b718C6aA868DD8374e5aF4a',
    },
    tokenSymbol: 'DEFI',
    tokenAddresses: {
      4002: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      250: '0xef393310b708761e3b6b59813ef41fe45d853cec',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },

]

export default farms
