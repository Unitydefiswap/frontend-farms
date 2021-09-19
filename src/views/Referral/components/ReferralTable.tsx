import React, { useState } from 'react'
import styled from 'styled-components'
import { Card, Heading, Text } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import UnlockButton from 'components/UnlockButton'
// import Web3 from 'web3'
// import { AbiItem } from 'web3-utils'
// import referralABI from 'config/abi/referral.json'
import { useTranslation } from 'contexts/Localization'
import { useReferralContract } from 'hooks/useContract'

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  padding: 24px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
  }
`
const ReferralTable: React.FC = () => {
  const { t } = useTranslation()

  const { account } = useWeb3React()
  const [referralFriends, setReferralFriends] = useState(0)
  const [totalReferralCommissions, setTotalReferralCommissions] = useState(0)

  // const web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org"));
  const referralContract = useReferralContract() // new web3.eth.Contract((referralABI as unknown) as AbiItem, '0xa01909589e40F95dd124B600a61929Ee3230df4f');

  const getReferralFriends = async () => {
    if (account) {
      const referrals = await referralContract.referralsCount(account)
      setReferralFriends(referrals?.toNumber() || 0)
      return referrals
    }
    return 0
  }

  const getTotalReferralCommissions = async () => {
    if (account) {
      const referralCommissions = await referralContract.totalReferralCommissions(account)
      setTotalReferralCommissions(referralCommissions)
      return referralCommissions
    }
    return 0
  }

  getReferralFriends()
  getTotalReferralCommissions()

  return (
    <Card>
      <Hero>
        {account && (
          <>
            <Heading scale="md" color="text" style={{ marginBottom: '15px' }}>
              {t('Use this link to invite friends:')}
            </Heading>
            <div>
              <a href={`https://unitydefi.com?uv-friend=${account}`}>
                <Text style={{ overflowWrap: 'anywhere' }}>{`https://unitydefi.com?uv-friend=${account}`}</Text>
              </a>
              <div style={{ marginTop: '15px' }}>
                <Text> Total UnityVentures friends : {referralFriends}</Text>
                <Text>Total Referral Commissions : {totalReferralCommissions / 10 ** 18} UVs</Text>
              </div>
            </div>
          </>
        )}
        {!account && (
          <>
            <Heading scale="md" color="text" style={{ marginBottom: '15px' }}>
              {t('Connect your wallet to get your referral link.')}
            </Heading>
            <UnlockButton />
          </>
        )}
      </Hero>
    </Card>
  )
}

export default ReferralTable
