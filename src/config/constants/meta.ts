import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'UnityDefi',
  description:
    'The most popular AMM on BSC by user count! Earn UV through yield farming or win it in the Lottery, then stake it in Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by UnityDefi), NFTs, and more, on a platform you can trust.',
  image: 'https://unitydefi.com/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('UnityDefi')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('UnityDefi')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('UnityDefi')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('UnityDefi')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('UnityDefi')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('UnityDefi')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('UnityDefi')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('UnityDefi')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('UnityDefi')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('UnityDefi')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('UnityDefi')}`,
      }
    default:
      return null
  }
}
