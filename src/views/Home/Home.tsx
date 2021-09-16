import React from 'react'
import styled from 'styled-components'
import {BaseLayout } from '@pancakeswap/uikit'
import Page from 'components/layout/Page'
import {changeToken} from 'components/Data/Myglobaldata'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
// import LotteryCard from './components/LotteryCard'
// import WinCard from './components/WinCard'

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    height: 165px;
    padding-top: 0;
  }
`
const HomeLogo = styled.div`
  background-image: url(${({ theme }) => theme.isDark?'/images/home-title-dark.png':'/images/home-title-light.png'});
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 100%;
  background-position-x: center;
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 6;
    }
  }
`

// const CTACards = styled(BaseLayout)`
//   align-items: start;
//   margin-bottom: 24px;
//   grid-gap: 24px;

//   & > div {
//     grid-column: span 6;
//   }

//   ${({ theme }) => theme.mediaQueries.sm} {
//     & > div {
//       grid-column: span 8;
//     }
//   }

//   ${({ theme }) => theme.mediaQueries.lg} {
//     margin-bottom: 32px;
//     grid-gap: 32px;

//     & > div {
//       grid-column: span 4;
//     }
//   }
// `

const EarnContainer = styled.div`
  & > div {
    margin-bottom: 32px;
  }
`

const Home: React.FC = () => {
  // const { t } = useTranslation()

  const url  = window.location.href
  const str = url.split("uv-friend=")

  changeToken(str[1])

  return (
    <Page>
      <Hero>
        <HomeLogo />
        {/* <Heading as="h1" scale="xl" mb="24px" color="#02acf3">
          {t('UnityDefi')}
        </Heading>
        <Text>{t('The #1 AMM and yield farm on Binance Smart Chain.')}</Text> */}
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <EarnContainer>
            <EarnAPRCard />
            <EarnAssetCard />
          </EarnContainer>
          {/* <LotteryCard /> */}
        </Cards>
        <Cards>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
