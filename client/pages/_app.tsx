import React, { FC, useEffect } from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AppProps } from 'next/app'

const OrderTracker: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])

  return (
    <>
      <Head>
        <link href='./styles/styles.css' rel='stylesheet' />
        <title>Svatováclavské dukáty</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap' rel='stylesheet' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default OrderTracker
