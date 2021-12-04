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
]

export default farms
