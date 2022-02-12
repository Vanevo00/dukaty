import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  primaryColor: '#37517e',
  secondaryColor: '#fff',
  tertiaryColor: 'gold',
  largeScreen: '1600px'
}

const SCThemeProvider: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export default SCThemeProvider
