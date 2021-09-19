import React from 'react'
import styled from 'styled-components'
import { BaseLayout, Heading, Flex } from '@pancakeswap/uikit'
import Page from 'components/layout/Page'

import { useTranslation } from 'contexts/Localization'
import PageHeader from 'components/PageHeader'
// import ReferralPanel from './components/Refinfo'
import ReferralTable from './components/ReferralTable'

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 12;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 12;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 12;
    }
  }
`

const Referral: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageHeader>
        <Flex justifyContent="space-between" flexDirection={['column', null, null, 'row']}>
          <Flex flex="1" flexDirection="column" mr={['8px', 0]}>
            <Heading as="h1" scale="xxl" color="secondary" mb="24px">
              {t('Referral')}
            </Heading>
            <Heading scale="md" color="text">
              {t('Earn 1% of your UnityVentures friends earnings!')}
            </Heading>
          </Flex>
        </Flex>
      </PageHeader>
      <Page>
        <Cards>
          <ReferralTable />
        </Cards>
      </Page>
    </>
  )
}

export default Referral
