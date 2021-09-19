import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Card, Text } from '@pancakeswap/uikit'

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  padding-top: 96px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/treeswapsx.svg'), url('/images/treeswapdx.svg');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`
const ReferralPanel: React.FC = () => {
  return (
    <Card>
      <Hero>
        <Text
          style={{ marginBottom: '25px' }}
        >{`Earn 1% of your UnityVentures friends earnings! use this link to invite friends: `}</Text>
      </Hero>
    </Card>
  )
}

export default ReferralPanel
