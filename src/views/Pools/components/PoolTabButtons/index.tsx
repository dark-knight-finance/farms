import React from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link } from 'react-router-dom'
import useI18n from 'hooks/useI18n'
import { ButtonMenu, ButtonMenuItem, Text, Toggle } from '@pancakeswap-libs/uikit'

const PoolTabButtons = ({ stakedOnly, setStakedOnly}) => {
  const { url, isExact } = useRouteMatch()
  const TranslateString = useI18n()

  const ToggleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 32px;

    ${Text} {
      margin-left: 8px;
    }
  `

  return (
    <Wrapper>
      <ToggleWrapper>
        <Toggle checked={stakedOnly} onChange={() => setStakedOnly(!stakedOnly)} />
        <Text> {TranslateString(699, 'Staked only')}</Text>
      </ToggleWrapper>

      <ButtonMenu activeIndex={!isExact ? 1 : 0} size="sm" variant="subtle">
        <ButtonMenuItem as={Link} to={`${url}`}>
          {TranslateString(999, 'Active')}
        </ButtonMenuItem>
        <ButtonMenuItem as={Link} to={`${url}/history`}>
          {TranslateString(999, 'Inactive')}
        </ButtonMenuItem>
      </ButtonMenu>
    </Wrapper>
  )
}

export default PoolTabButtons

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`
