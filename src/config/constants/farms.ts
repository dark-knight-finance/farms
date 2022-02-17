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


  {
    pid: 12,
    risk: 3,
    lpSymbol: 'DEP-FTM LP',
    lpAddresses: {
      4002: '0x46F2cC2731f80Aa658B4408F9B533a0d19e9516E',
      250: '0x503880630DAE08BA6c60C52F2632Abce7Ff34CBF',
    },
    tokenSymbol: 'DEP',
    tokenAddresses: {
      4002: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      250: '0x8dFDC61c7c7551D0DEec950A2822eB59cddb8f59',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 13,
    risk: 3,
    lpSymbol: 'DUO-FTM LP',
    lpAddresses: {
      4002: '0x46F2cC2731f80Aa658B4408F9B533a0d19e9516E',
      250: '0x10dA5667874782624905331964dB64B1197866C0',
    },
    tokenSymbol: 'DUO',
    tokenAddresses: {
      4002: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      250: '0x779d5AECf90c724347B6A5a92083DaF57296459E',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },

  {
    pid: 14,
    risk: 3,
    lpSymbol: 'DFY-USDC LP',
    lpAddresses: {
      4002: '0x46F2cC2731f80Aa658B4408F9B533a0d19e9516E',
      250: '0x203056e0dfE3Eca755eb060e438242a4F559B7d8',
    },
    tokenSymbol: 'DFY',
    tokenAddresses: {
      4002: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      250: '0x84b0b7718f8480a9eda3133fd385d7edf2b1d1c4',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },


  {
    pid: 15,
    risk: 3,
    lpSymbol: 'AOD-FTM LP',
    lpAddresses: {
      4002: '0x46F2cC2731f80Aa658B4408F9B533a0d19e9516E',
      250: '0x98e0d6A39863E1867b5C35655631129DBd78f22C',
    },
    tokenSymbol: 'AOD',
    tokenAddresses: {
      4002: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      250: '0x632819c470cf8c1b4b09ca12d5d3e0c2d19c987d',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 16,
    risk: 3,
    lpSymbol: 'FLORY-FTM LP',
    lpAddresses: {
      4002: '0x46F2cC2731f80Aa658B4408F9B533a0d19e9516E',
      250: '0xa8213d26B19a2184db4200A07ab1C9FA51b058dA',
    },
    tokenSymbol: 'FLORY',
    tokenAddresses: {
      4002: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      250: '0x05ce3e76ede285d6ed2507d5472ca1c061ac9a8c',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },

  {
    pid: 17,
    risk: 3,
    lpSymbol: 'FTMO-FTM LP',
    lpAddresses: {
      4002: '0x46F2cC2731f80Aa658B4408F9B533a0d19e9516E',
      250: '0x46f702bb9F114BAA762ce1312C27f028E99C7382',
    },
    tokenSymbol: 'FTMO',
    tokenAddresses: {
      4002: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      250: '0x9bD0611610A0f5133e4dd1bFdd71C5479Ee77f37',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },


  {
    pid: 18,
    risk: 3,
    lpSymbol: 'NAUT-FTM LP',
    lpAddresses: {
      4002: '0x46F2cC2731f80Aa658B4408F9B533a0d19e9516E',
      250: '0xf429c5a44f98661c52910938e205Ca7e419E9731',
    },
    tokenSymbol: 'NAUT',
    tokenAddresses: {
      4002: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      250: '0x9c11ca3b1012bb752e1b57f939e3a86af354675c',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },



  {
    pid: 19,
    risk: 3,
    lpSymbol: '5TABLE-FTM LP',
    lpAddresses: {
      4002: '0x46F2cC2731f80Aa658B4408F9B533a0d19e9516E',
      250: '0xFC8af2E2C98CBb73Ebf3A5e42bc43f27f271dd20',
    },
    tokenSymbol: '5TABLE',
    tokenAddresses: {
      4002: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      250: '0x14d6111dbfD64CEb9676a494BF86AA9f7DD54acC',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },


  {
    pid: 20,
    risk: 3,
    lpSymbol: 'FAST-FTM LP',
    lpAddresses: {
      4002: '0x46F2cC2731f80Aa658B4408F9B533a0d19e9516E',
      250: '0xFee526a245dbF5604189D5Cb86A293CD678De262',
    },
    tokenSymbol: 'FAST',
    tokenAddresses: {
      4002: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      250: '0x0299461eE055bbb6dE11fAfE5a0636A0C3Bd5E8d',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },


  {
    pid: 21,
    risk: 3,
    lpSymbol: 'MP-FTM LP',
    lpAddresses: {
      4002: '0x46F2cC2731f80Aa658B4408F9B533a0d19e9516E',
      250: '0x20D3BA695fd89053E40C463D68e4Ec16a50B40e2',
    },
    tokenSymbol: 'MP',
    tokenAddresses: {
      4002: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      250: '0x3264810174f577F82DDD4FD08818F368AC363505',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },
  
]


export default farms

