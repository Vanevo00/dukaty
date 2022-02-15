import React, { FC, useEffect } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import ThemeProvider from '../components/StyledComponents/ThemeProvider'

const OrderTracker: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link href='./styles/styles.css' rel='stylesheet' />
        <title>Dukáty.cz</title>
        <link rel='shortcut icon' type='image/jpg' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap' rel='stylesheet' />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default OrderTracker
