import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 5, 6) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'UV',
    lpAddresses: {
      97: '',
      56: '0xb3A95BdBe4AC65B0628db1E6600F71ed59b89255',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'UV-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x64286cDa344BdF0A48a838656B0D0a2d7a5F8EF5',
    },
    token: tokens.uv,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'RYIU-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x1B0CC844599e8901703564cF2151b57461563d02',
    },
    token: tokens.ryiu,
    quoteToken: tokens.wbnb,
  }
]

export default farms
