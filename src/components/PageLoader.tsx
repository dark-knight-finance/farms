import React from 'react'
import styled from 'styled-components'
import { Spinner } from '@pancakeswap-libs/uikit'
import Page from './layout/Page'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      {/* <Spinner /> */}
      <img src="/images/knight/k4.svg" alt="cake logo" width="64" height="64" className="sc-eLgOdN kJNvFl"/>    </Wrapper>
  )
}

export default PageLoader
