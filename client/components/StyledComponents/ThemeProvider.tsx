import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  primaryColor: '#37517e',
  lightPrimaryColor: '#4a6eab',
  secondaryColor: '#fff',
  tertiaryColor: 'gold',
  errorColor: '#B00020',
  successColor: '#4F8A10',
  primaryFont: '"Poppins", sans-serif',
  largeScreen: '1080px',
  mobileScreen: '800px'
}

const SCThemeProvider: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export default SCThemeProvider
