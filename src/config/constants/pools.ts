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
    rewardTokenDetails: {
      tokenAddress: '0x551C61DB482289994e7d426Fc4DB6493918bB81D',
      lpAddress: '0xBfBC8eeC9d24eb10702D7F233d6cf687D8F1b2b4',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
    },
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
    rewardTokenDetails: {
      tokenAddress: '0x4a3DCE89cA816D4F10864664B6503df95a92d879',
      lpAddress: '0x8b65868407f3c60C405d2AF096c92247Ed1F7c33',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
    },
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
    rewardTokenDetails: {
      tokenAddress: '0xef393310b708761e3b6b59813ef41fe45d853cec',
      lpAddress: '0x6B94F5C3944CEb619b718C6aA868DD8374e5aF4a',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
    },
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

    rewardTokenDetails: {
      tokenAddress: '0x8dFDC61c7c7551D0DEec950A2822eB59cddb8f59',
      lpAddress: '0x503880630DAE08BA6c60C52F2632Abce7Ff34CBF',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
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

    rewardTokenDetails: {
      tokenAddress: '0x779d5AECf90c724347B6A5a92083DaF57296459E',
      lpAddress: '0x10dA5667874782624905331964dB64B1197866C0',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
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
    rewardTokenDetails: {
      tokenAddress: '0x551C61DB482289994e7d426Fc4DB6493918bB81D',
      lpAddress: '0xBfBC8eeC9d24eb10702D7F233d6cf687D8F1b2b4',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
    },
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
    rewardTokenDetails: {
      tokenAddress: '0x4a3DCE89cA816D4F10864664B6503df95a92d879',
      lpAddress: '0x8b65868407f3c60C405d2AF096c92247Ed1F7c33',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
    },
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
    rewardTokenDetails: {
      tokenAddress: '0xef393310b708761e3b6b59813ef41fe45d853cec',
      lpAddress: '0x6B94F5C3944CEb619b718C6aA868DD8374e5aF4a',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
    },
    sortOrder: 999,
    isFinished: true,
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

    rewardTokenDetails: {
      tokenAddress: '0x632819c470cf8c1b4b09ca12d5d3e0c2d19c987d',
      lpAddress: '0x98e0d6A39863E1867b5C35655631129DBd78f22C',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
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

    rewardTokenDetails: {
      tokenAddress: '0x05ce3e76ede285d6ed2507d5472ca1c061ac9a8c',
      lpAddress: '0xa8213d26B19a2184db4200A07ab1C9FA51b058dA',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
    },
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

    rewardTokenDetails: {
      tokenAddress: '0x9bD0611610A0f5133e4dd1bFdd71C5479Ee77f37',
      lpAddress: '0x46f702bb9F114BAA762ce1312C27f028E99C7382',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://oasislaunch.me/',
    harvest: true,
    tokenPerBlock: '0.347',
    sortOrder: 999,
    isFinished: true,
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
    rewardTokenDetails: {
      tokenAddress: '0x8dFDC61c7c7551D0DEec950A2822eB59cddb8f59',
      lpAddress: '0x503880630DAE08BA6c60C52F2632Abce7Ff34CBF',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
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

    rewardTokenDetails: {
      tokenAddress: '0x9c11ca3b1012bb752e1b57f939e3a86af354675c',
      lpAddress: '0xf429c5a44f98661c52910938e205Ca7e419E9731',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
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


  {
    sousId: 14,
    tokenName: '5TABLE',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0x1dEdCD33AdA6b63A0ae27a68bf8b67469119382a',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },

    rewardTokenDetails: {
      tokenAddress: '0x14d6111dbfD64CEb9676a494BF86AA9f7DD54acC',
      lpAddress: '0xFC8af2E2C98CBb73Ebf3A5e42bc43f27f271dd20',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://5table.finance/',
    harvest: true,
    tokenPerBlock: '0.00912',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0x14d6111dbfd64ceb9676a494bf86aa9f7dd54acc',
  },


  {
    sousId: 15,
    tokenName: 'FAST',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0x82edb8c3eb59a8a1c38c130277d75a701da2692b',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },
    rewardTokenDetails: {
      tokenAddress: '0x0299461eE055bbb6dE11fAfE5a0636A0C3Bd5E8d',
      lpAddress: '0xFee526a245dbF5604189D5Cb86A293CD678De262',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://fastyield.app/',
    harvest: true,
    tokenPerBlock: '0.0071',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0x0299461ee055bbb6de11fafe5a0636a0c3bd5e8d',
  },


  {
    sousId: 16,
    tokenName: 'MP',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0x988CC800c08FC2f6C4157163BAc136BcC052f9d4',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },
    rewardTokenDetails: {
      tokenAddress: '0x3264810174f577F82DDD4FD08818F368AC363505',
      lpAddress: '0x20D3BA695fd89053E40C463D68e4Ec16a50B40e2',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
      rewardTokenDecimals:9
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://minipanther.money/',
    harvest: true,
    tokenPerBlock: '0.0012',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0x0299461ee055bbb6de11fafe5a0636a0c3bd5e8d',
  },




  {
    sousId: 17,
    tokenName: 'dKNIGHT',
    stakingTokenName: QuoteToken.wMP,
    stakingTokenAddress: '0x376d7370347fd8baccfa918362d80fafe7792890',
    contractAddress: {
      250: '0x65bF6E7f453936a2B5e173482a822F40Ac7114b6',
      4002: '0x65bF6E7f453936a2B5e173482a822F40Ac7114b6',
    },

    rewardTokenDetails: {
      tokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
      lpAddress: '0xD519AE779eb7987cdddA63be2CEffE0C35759E04',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://minipanther.money/',
    harvest: true,
    tokenPerBlock: '0.039',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0x0299461ee055bbb6de11fafe5a0636a0c3bd5e8d',
  },





  {
    sousId: 18,
    tokenName: 'DEFI',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0xe3d65588c6fe511a56ad1412c8895f79b3213d8d',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://ftm.defilaunch.finance/',
    harvest: true,
    tokenPerBlock: '0.00954861111',
    sortOrder: 999,
    isFinished: false,
    rewardTokenDetails: {
      tokenAddress: '0xef393310b708761e3b6b59813ef41fe45d853cec',
      lpAddress: '0x6B94F5C3944CEb619b718C6aA868DD8374e5aF4a',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
    },
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0xef393310b708761e3b6b59813ef41fe45d853cec',
  },




  {
    sousId: 19,
    tokenName: 'PROTO',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0xb7BE9b907d56c94fA49F091A8D46A49013CEA170',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://protofi.app/',
    harvest: true,
    tokenPerBlock: '0.315',
    sortOrder: 999,
    isFinished: false,
    rewardTokenDetails: {
      tokenAddress: '0xa23c4e69e5eaf4500f2f9301717f12b578b948fb',
      lpAddress: '0x4fd0317205eb0d36827a966ac635d28654cce71b',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
    },
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0xef393310b708761e3b6b59813ef41fe45d853cec',
  },


  {
    sousId: 22,
    tokenName: 'THUNDER',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0xf0183536999be2bbc019ebc21181acada02accae',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.thethunderverse.com/',
    harvest: true,
    tokenPerBlock: '3.47',
    sortOrder: 999,
    isFinished: false,
    rewardTokenDetails: {
      tokenAddress: '0x8B7ec83ec7a687Dd81596d0251Bae16d4F005B6c',
      lpAddress: '0x17187a8fDcE62667aC55cD1Af9c5cf8c2a6ED603',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
    },
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0xef393310b708761e3b6b59813ef41fe45d853cec',
  },
  {
    sousId: 23,
    tokenName: 'FSPA ',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0x9f7Aba620351ca6f00FF02Ed95EbBa5CB13e4742',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '',
    harvest: true,
    tokenPerBlock: '2.63',
    sortOrder: 999,
    isFinished: false,
    rewardTokenDetails: {
      tokenAddress: '0x63aad0448f58ae1b98d75456cfc6f39235e353f6',
      lpAddress: '0x6a70b13bdcf84d0d7f399d3e892c290e59a7e317',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
    },
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0xef393310b708761e3b6b59813ef41fe45d853cec',
  },

  {
    sousId: 24,
    tokenName: '5TABLE',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0x448c5c649eb586b44411c3c79174825becac628b',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://ftm.5table.finance/',
    harvest: true,
    tokenPerBlock: '0.023',
    sortOrder: 999,
    isFinished: false,
    rewardTokenDetails: {
      tokenAddress: '0x14d6111dbfD64CEb9676a494BF86AA9f7DD54acC',
      lpAddress: '0xFC8af2E2C98CBb73Ebf3A5e42bc43f27f271dd20',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
    },
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0xef393310b708761e3b6b59813ef41fe45d853cec',
  },



  {
    sousId: 25,
    tokenName: 'FTMO',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0x4aa8ed95e5bc8bbccaca428daff04617d93fcc8d',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },

    rewardTokenDetails: {
      tokenAddress: '0x9bD0611610A0f5133e4dd1bFdd71C5479Ee77f37',
      lpAddress: '0x46f702bb9F114BAA762ce1312C27f028E99C7382',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
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
    sousId: 26,
    tokenName: 'PROTO',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0x5AD29ac8213E21187ddb1A35E2D21cAf9BF07ea3',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://protofi.app/',
    harvest: true,
    tokenPerBlock: '0.35',
    sortOrder: 999,
    isFinished: false,
    rewardTokenDetails: {
      tokenAddress: '0xa23c4e69e5eaf4500f2f9301717f12b578b948fb',
      lpAddress: '0x4fd0317205eb0d36827a966ac635d28654cce71b',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
    },
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0xef393310b708761e3b6b59813ef41fe45d853cec',
  },



  {
    sousId: 27,
    tokenName: 'Undead',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0x4C058eB05B4c5D0F1EE6afe6687D247F571Ef39c',
      4002: '0x4C058eB05B4c5D0F1EE6afe6687D247F571Ef39c',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://undead.to/',
    harvest: true,
    tokenPerBlock: '0.07',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    rewardTokenDetails: {
      tokenAddress: '0x551C61DB482289994e7d426Fc4DB6493918bB81D',
      lpAddress: '0xBfBC8eeC9d24eb10702D7F233d6cf687D8F1b2b4',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
    },
    addLiquidityUrl:
      'https://dex.knightswap.financial/#/swap?outputCurrency=0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
  },


  {
    sousId: 28,
    tokenName: 'DEP',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0xb06ec15fe626939479cc5682adac632797c87469',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },

    rewardTokenDetails: {
      tokenAddress: '0x8dFDC61c7c7551D0DEec950A2822eB59cddb8f59',
      lpAddress: '0x503880630DAE08BA6c60C52F2632Abce7Ff34CBF',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://dea.sg/',
    harvest: true,
    tokenPerBlock: '0.32',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0x8dfdc61c7c7551d0deec950a2822eb59cddb8f59',
  },




  {
    sousId: 29,
    tokenName: 'FLIBERO',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0x6a29c071cfb5e9ffdd3c0cd0cca7bc5df76db52e',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },

    rewardTokenDetails: {
      tokenAddress: '0xC3f069D7439baf6D4D6E9478D9Cc77778E62D147',
      lpAddress: '0x175e8a023D20b62E5E8570c81f03a75ec448Fd07',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '',
    harvest: true,
    tokenPerBlock: '1.44225231',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0x8dfdc61c7c7551d0deec950a2822eb59cddb8f59',
  },


  {
    sousId: 30,
    tokenName: 'ASNT',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0x2dc2b3c20cef109c4fdf0bf01e897a9b80595681',
      4002: '0x2dc2b3C20CEF109C4fDf0bf01E897A9b80595681',
    },

    rewardTokenDetails: {
      tokenAddress: '0x5B3C1F260E09e653290f24F75abC5e466fD42310',
      lpAddress: '0x8d9221A0cd46ba97DbC303397447BB983925364B',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://assentprotocol.com/',
    harvest: true,
    tokenPerBlock: '0.02143',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0x8dfdc61c7c7551d0deec950a2822eb59cddb8f59',
  },


  {
    sousId: 31,
    tokenName: 'DEP',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0xC93dDBC22223411A26cdb6A41703ca5E57c358fc',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },

    rewardTokenDetails: {
      tokenAddress: '0x8dFDC61c7c7551D0DEec950A2822eB59cddb8f59',
      lpAddress: '0x503880630DAE08BA6c60C52F2632Abce7Ff34CBF',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://dea.sg/',
    harvest: true,
    tokenPerBlock: '0.0875',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0x8dfdc61c7c7551d0deec950a2822eb59cddb8f59',
  },




  {
    sousId: 32,
    tokenName: '5TABLE',
    stakingTokenName: QuoteToken.dKNIGHT,
    stakingTokenAddress: '0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
    contractAddress: {
      250: '0x833fF29D07bDb44bb0334b01870AF67b41Ba73a7',
      4002: '0xe790a0683b669089AdC199996F89Bd40FEd4C559',
    },

    rewardTokenDetails: {
      tokenAddress: '0x14d6111dbfD64CEb9676a494BF86AA9f7DD54acC',
      lpAddress: '0xFC8af2E2C98CBb73Ebf3A5e42bc43f27f271dd20',
      quoteTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      quoteTokenSymbol: 'FTM',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://5table.finance/',
    harvest: true,
    tokenPerBlock: '0.00912',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    addLiquidityUrl:
      'https://darkdex.knightswap.financial/#/swap?outputCurrency=0x14d6111dbfd64ceb9676a494bf86aa9f7dd54acc',
  },



]

export default pools
