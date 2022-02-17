import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Ticket, HelpIcon } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import UnlockButton from 'components/UnlockButton'

const StyledCardBody = styled(CardBody)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledHeading = styled(Heading)`
  margin: 16px 0;
`

const IconWrapper = styled.div`
  svg {
    width: 80px;
    height: 80px;
  }
`


const TicketRound = ()=>{
  return <img

  style={{
    // background:"#01427c",
    padding:10,
    // borderRadius:"80%",
    height:80,
    width:80
  }}
   src="/images/lottery/Ticket.png" 
  alt="lottery"/>
}
const UnlockWalletCard = () => {
  const TranslateString = useI18n()

  return (
    <Card isActive>
      <StyledCardBody>
        <IconWrapper>
          <TicketRound />
        </IconWrapper>
        <StyledHeading size="md">{TranslateString(999, 'Unlock wallet to access lottery')}</StyledHeading>
        <UnlockButton />
      </StyledCardBody>
    </Card>
  )
}

export default UnlockWalletCard
