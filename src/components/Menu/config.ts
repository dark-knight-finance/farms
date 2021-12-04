import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://darkdex.knightswap.financial/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://darkdex.knightswap.financial/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  // {
  //   label: 'Nests',
  //   icon: 'PoolIcon',
  //   href: '/nests',
  // },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },

  {
    label: 'Raids',
    icon: 'FarmIcon',
    href: '/raid',
  },
  {
    label: 'IUO',
    icon: 'IfoIcon',
    href: '/iuo',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  {
    label: 'Audits',
    icon: 'AuditIcon',
    href: '#',
  },
  {
    label: 'Listing',
    icon: 'InfoIcon',
    items: [
      {
        label: 'FTMScan',
        href: 'https://ftmscan.com/token/0x6cc0E0AedbbD3C35283e38668D959F6eb3034856',
      },
      {
        label: 'DappRadar',
        href: '',
      },
      {
        label: 'CoinGecko',
        href: '',
      },
      {
        label: 'CoinMarketCap',
        href: '',
      },
      // {
      //   label: 'AstroTools',
      //   href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      // },
    ],
  },
  // {
  //   label: 'Analytics',
  //   icon: 'InfoIcon',
  //   href: '#',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/Knightswap',
      },
      {
        label: 'Docs',
        href: 'https://knights.gitbook.io/darkknight/',
      },
      {
        label: 'Roadmap',
        href: 'https://knightatbsc.gitbook.io/knight.financial/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/knight-bsc-dark-knight-ftm/',
      },
      {
        label: 'Discord',
        href: 'https://discord.gg/qPEUB59F6S',
      },
    ],
  },

  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
