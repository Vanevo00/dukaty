import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar/Navbar'

const MainBackgroundWrapper = styled.div`
  background-color: ${props => props.theme.primaryColor};
  display: flex;
  justify-content: center;
`

const LayoutWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 1046px;
`

const Layout: FunctionComponent = ({ children }) => {
  return (
    <MainBackgroundWrapper>
      <LayoutWrapper>
        <Navbar />
        {children}
      </LayoutWrapper>
    </MainBackgroundWrapper>
  )
}

export default Layout
