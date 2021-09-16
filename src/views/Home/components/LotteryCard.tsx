import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Card, CardBody, Button,  Heading, useModal } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import { getBalanceNumber } from 'utils/formatBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import useGetLotteryHasDrawn from 'views/Lottery/hooks/useGetLotteryHasDrawn'
import useTokenBalance from 'hooks/useTokenBalance'
import { useMultiClaimLottery } from 'views/Lottery/hooks/useBuyLottery'
import { useTotalClaim } from 'views/Lottery/hooks/useTickets'
import BuyModal from 'views/Lottery/components/TicketCard/BuyTicketModal'
import CakeWinnings from './CakeWinnings'
import LotteryJackpot from './LotteryJackpot'

const StyledLotteryCard = styled(Card)`
  min-height: 376px;
`

// const StyledHeadingText = styled(Text)`
//   font-size: 24px;
//   line-height: 1.1;
//   ${({ theme }) => theme.mediaQueries.lg} {
//     font-size: 40px;
//   }
// `

// const StyledText = styled(Text)`
//   font-size: 40px;
//   line-height: 1.1;
//   ${({ theme }) => theme.mediaQueries.lg} {
//     font-size: 50px;
//   }
// `

const Block = styled.div`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  display: flex;
  margin-top: 24px;
  button {
    flex: 1 0 50%;
  }
`

const LotteryCard = () => {
  const { t } = useTranslation()

  const lotteryHasDrawn = useGetLotteryHasDrawn()
  const [requesteClaim, setRequestedClaim] = useState(false)
  const { claimAmount } = useTotalClaim()
  const { onMultiClaim } = useMultiClaimLottery()
  const cakeBalance = useTokenBalance(getCakeAddress())

  const handleClaim = useCallback(async () => {
    try {
      setRequestedClaim(true)
      const txHash = await onMultiClaim()
      // user rejected tx or didn't go thru
      if (txHash) {
        setRequestedClaim(false)
      }
    } catch (e) {
      console.error(e)
    }
  }, [onMultiClaim, setRequestedClaim])

  const [onPresentBuy] = useModal(<BuyModal max={cakeBalance.balance} tokenName="UV" />)

  return (
    <StyledLotteryCard>
      <CardBody>
        {/* <StyledHeadingText bold mb="24px">
          UnityVentures {t('Lottery')}
        </StyledHeadingText> */}
        {/* <StyledText bold mb="24px" color="#02acf3">
          {t('Coming Soon...')}
        </StyledText> */}
        {/* <Link external href="https://unitydefi.com" >
          <Button px={['14px', null, null, null, '20px']}>
            <Text color="backgroundAlt" bold fontSize="16px">
              {t('Learn More')}
            </Text>
          </Button>
        </Link> */}
        <Heading size="xl" mb="24px">
          {t('Your Lottery Winnings')}
        </Heading>
        <Block>
          <CakeWinnings claimAmount={new BigNumber(0)} />
          <Label>{t('UV to Collect')}</Label>
        </Block>
        <Block>
          <LotteryJackpot />
          <Label>{t('Total jackpot this round')}</Label>
        </Block>
        <Actions>
          <Button
            id="dashboard-collect-winnings"
            disabled={getBalanceNumber(claimAmount) === 0 || requesteClaim}
            onClick={handleClaim}
            style={{ marginRight: '8px' }}
          >
            {t('Collect Winnings')}
          </Button>
          <Button id="dashboard-buy-tickets" variant="secondary" onClick={onPresentBuy} disabled={lotteryHasDrawn}>
            {t('Buy Tickets')}
          </Button>
        </Actions>
      </CardBody>
    </StyledLotteryCard>
  )
}

export default LotteryCard
