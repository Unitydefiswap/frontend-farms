import BigNumber from 'bignumber.js'

interface ObjectType {
  myreferrerdata: string
  token: string
  tvl: BigNumber
}
const Myglobaldata: ObjectType = { myreferrerdata: null, token: '', tvl: new BigNumber(0) }

export function changeToken(name: string) {
  Myglobaldata.token = name
}

export function getToken() {
  return Myglobaldata.token
}

export function setTvl(name: BigNumber) {
  Myglobaldata.tvl = name
}

export function getTvl() {
  return Myglobaldata.tvl
}
export default Myglobaldata
