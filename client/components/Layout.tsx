import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar/Navbar'

const LayoutWrapper = styled.div`
  background-color: ${props => props.theme.primaryColor};
  min-height: 100vh;
  padding: 0 300px;

  @media (max-width: ${props => props.theme.largeScreen}) {
    padding: 0 100px;
  }
`

const Layout: FunctionComponent = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      {children}
    </LayoutWrapper>

  )
}

export default Layout
