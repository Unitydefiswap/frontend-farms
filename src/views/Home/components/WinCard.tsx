import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon } from '@pancakeswap/uikit'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import useLotteryTotalPrizesUsd from 'views/Lottery/hooks/useLotteryTotalPrizesUsd'

const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }

  transition: opacity 200ms;
  &:hover {
    opacity: 0.65;
  }
`
const CardMidContent = styled(Heading).attrs({ scale: 'xl' })`
  line-height: 44px;
`
const WinCard = () => {
  const { t } = useTranslation()
  const lotteryPrize = Math.round(useLotteryTotalPrizesUsd()).toLocaleString()

  return (
    <StyledFarmStakingCard>
      <NavLink exact activeClassName="active" to="/lottery" id="lottery-pot-cta">
        <CardBody>
          <Heading color="contrast" scale="lg">
            {t('Lottery')}
          </Heading>
          <CardMidContent color="#02acf3">${lotteryPrize}</CardMidContent>
          <Flex justifyContent="space-between">
            <Heading color="contrast" scale="lg" />
            <ArrowForwardIcon mt={30} color="primary" />
          </Flex>
        </CardBody>
      </NavLink>
    </StyledFarmStakingCard>
  )
}

export default WinCard
