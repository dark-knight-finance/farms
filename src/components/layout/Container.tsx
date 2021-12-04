import styled from 'styled-components'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 0px;
    padding-right: 0px;
  }
`

export default Container
