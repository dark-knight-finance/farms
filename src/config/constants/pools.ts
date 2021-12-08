import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  // {
  //   sousId: 0,
  //   tokenName: 'KNIGHT',
  //   stakingTokenName: QuoteToken.KNIGHT,
  //   stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
  //   contractAddress: {
  //     250: '0xb02e3A4B5ebC315137753e24b6Eb6aEF7D602E40',
  //     4002: '0xb02e3A4B5ebC315137753e24b6Eb6aEF7D602E40',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://knightswap.financial/',
  //   harvest: true,
  //   tokenPerBlock: '1',
  //   sortOrder: 1,
  //   isFinished: false,
  //   tokenDecimals: 18,
  //   addLiquidityUrl: "https://dex.knightswap.financial/#/swap?outputCurrency=0x6cc0E0AedbbD3C35283e38668D959F6eb3034856"
  // },
  {
    sousId: 1,
    tokenName: 'Undead',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0xEe0675C1DC97a7B0f950DAEe997D5E202796D8B2',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://undead.to/',
    harvest: true,
    tokenPerBlock: '0.028935185185185185',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://dex.knightswap.financial/#/swap?outputCurrency=0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
  },

  {
    sousId: 2,
    tokenName: 'FatCake',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0x0D1726f6Ac89EACC534C98c109dB699eB2ed555d',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.fantomcake.com/',
    harvest: true,
    tokenPerBlock: '0.04863',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0x4a3DCE89cA816D4F10864664B6503df95a92d879',
  },
  // {
  //   sousId: 2,
  //   tokenName: 'Guard',
  //   stakingTokenName: QuoteToken.KNIGHT,
  //   stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
  //   contractAddress: {
  //     97: '0xeb8A345ab74Ba098387a4ef18191C6D8793D9ae7',
  //     56: '0x3b8B92D882127b5e14c9476615374a69e55d4Ca1',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://www.wolfdencrypto.com/?r_done=1',
  //   harvest: true,
  //   tokenPerBlock: '0.2054',
  //   sortOrder: 999,
  //   isFinished: false,
  //   tokenDecimals: 18,
  //   addLiquidityUrl: "https://dex.knightswap.financial/#/swap?outputCurrency=0x6cc0E0AedbbD3C35283e38668D959F6eb3034856"

  // },
  // {
  //   sousId: 3,
  //   tokenName: 'CRUSH',
  //   stakingTokenName: QuoteToken.KNIGHT,
  //   stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
  //   contractAddress: {
  //     97: '0xeb8A345ab74Ba098387a4ef18191C6D8793D9ae7',
  //     56: '0xF928BB46273043F98cc731CeFFc16A1ccC177707',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://www.bitcrush.com/',
  //   harvest: true,
  //   tokenPerBlock: '0.15625',
  //   sortOrder: 999,
  //   isFinished: false,
  //   tokenDecimals: 18,
  //   addLiquidityUrl: "https://dex.knightswap.financial/#/swap?outputCurrency=0x6cc0E0AedbbD3C35283e38668D959F6eb3034856"

  // },
  // {
  //   sousId: 1,
  //   tokenName: 'KNIGHT',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: '0x95b907a589F420955979C11271D5BA0da93cC5dC',
  //   contractAddress: {
  //     97: '0xc134bBA9e360E9bA463FCf72C3799C8Fa757954c',
  //     56: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://trustwallet.com/',
  //   harvest: true,
  //   tokenPerBlock: '0.2',
  //   sortOrder: 999,
  //   isFinished: false,
  //   tokenDecimals: 18,
  // },
]

export default pools
