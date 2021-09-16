import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.uv,
    earningToken: tokens.uv,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x2eE006bc0562E5b0ef37C93dCaFA464706f628F7',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.1',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: tokens.ryiu,
    earningToken: tokens.uv,
    contractAddress: {
      97: '',
      56: '0xE413Bb136134D3BA8F7F6821Aa8e30108328c087',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0139',
  },
  // {
  //   sousId: 142,
  //   stakingToken: tokens.doge,
  //   earningToken: tokens.uv,
  //   contractAddress: {
  //     97: '',
  //     56: '0xbebd44824631b55991fa5f2bf5c7a4ec96ff805b',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.01388',
  //   isFinished: false,
  // },
]

export default pools
