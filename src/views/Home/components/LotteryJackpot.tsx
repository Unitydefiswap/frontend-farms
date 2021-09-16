import React from 'react'
import { Text } from '@pancakeswap/uikit'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from 'views/Lottery/hooks/useTickets'


const LotteryJackpot = () => {
  const lotteryPrizeAmount = useTotalRewards()

  return (
    <>
      <Text bold fontSize="24px" style={{ lineHeight: '1.5' }}>
        {getBalanceNumber(lotteryPrizeAmount).toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })}
      </Text>
      <br />
    </>
  )
}

export default LotteryJackpot
