import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  
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
    isFinished: true,
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://dex.knightswap.financial/#/swap?outputCurrency=0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
  },

 


  {
    sousId: 2,
    tokenName: 'FATCAKE',
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
    isFinished: true,
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0x4a3DCE89cA816D4F10864664B6503df95a92d879',
  },


 


  {
    sousId: 3,
    tokenName: 'DEFI',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0x1F8Bb17cf33895FF0f6aC5371B71740E87508f4D',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://ftm.defilaunch.finance/',
    harvest: true,
    tokenPerBlock: '0.00954861111',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0xef393310b708761e3b6b59813ef41fe45d853cec',
  },

  {
    sousId: 4,
    tokenName: 'DEP',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0x6A7b85c09eae5126d1dE7e9411fE5d4454047CB3',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://dea.sg/',
    harvest: true,
    tokenPerBlock: '0.167',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0x8dfdc61c7c7551d0deec950a2822eb59cddb8f59',
  },

  {
    sousId: 5,
    tokenName: 'DUO',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0x2339f1efe6bb693717ccb4418ec252c78e82a0ed',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '',
    harvest: true,
    tokenPerBlock: '0.00015614583',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0x779d5aecf90c724347b6a5a92083daf57296459e',
  },
  {
    sousId: 6,
    tokenName: 'Undead',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0x252F64BEa49b83894700433C20f11C2C11D58715',
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
    sousId: 7,
    tokenName: 'FATCAKE',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0x0711510a3687A6f296D5c64Ae226f6772F7882C7',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.fantomcake.com/',
    harvest: true,
    tokenPerBlock: '0.0868',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0x4a3DCE89cA816D4F10864664B6503df95a92d879',
  },



  {
    sousId: 8,
    tokenName: 'DEFI',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0x4eb0745d224e697f53712d40fd6165ce8cc380ba',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://ftm.defilaunch.finance/',
    harvest: true,
    tokenPerBlock: '0.00954861111',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0xef393310b708761e3b6b59813ef41fe45d853cec',
  },


  {
    sousId: 9,
    tokenName: 'AOD',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0x79487e736de62a86650b4ddcaaee537dafe99d24',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://agefantom.com/',
    harvest: true,
    tokenPerBlock: '0.00002222222',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0x632819c470cf8c1b4b09ca12d5d3e0c2d19c987d',
  },
  {
    sousId: 10,
    tokenName: 'FLORY',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0xdae2ee5ff523332ba018720fc1bf66c53cd9347b',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '',
    harvest: true,
    tokenPerBlock: '0.0583',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0x632819c470cf8c1b4b09ca12d5d3e0c2d19c987d',
  },
  {
    sousId: 11,
    tokenName: 'FTMO',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0x6f62e600124137b3f2a12afa71d1d635b6a98a88',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://oasislaunch.me/',
    harvest: true,
    tokenPerBlock: '0.347',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0x632819c470cf8c1b4b09ca12d5d3e0c2d19c987d',
  },


  {
    sousId: 12,
    tokenName: 'DEP',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0x9d330322abb103f689d97498b8dfc6ef40a971ac',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://dea.sg/',
    harvest: true,
    tokenPerBlock: '0.177',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0x8dfdc61c7c7551d0deec950a2822eb59cddb8f59',
  },


  {
    sousId: 13,
    tokenName: 'NAUT',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0x1fba4f898840b3efdfd1a9e51c9edf9d7add86e3',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://fantom.astronaut.to/',
    harvest: true,
    tokenPerBlock: '0.192',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0x9c11ca3b1012bb752e1b57f939e3a86af354675c',
  },

]

export default pools
