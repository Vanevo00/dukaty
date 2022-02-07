import React, { FC } from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AppProps } from 'next/app'

const OrderTracker: FC<AppProps> = ({ Component, pageProps }) => (
    <>
      <Head>
        <link href='./styles/styles.css' rel="stylesheet"/>
        <title>Svatováclavské dukáty</title>
      </Head>
      <Component {...pageProps} />
    </>
  )

export default OrderTracker
