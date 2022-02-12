import React, { FunctionComponent } from 'react'
import Navbar from './Navbar/Navbar'

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className='primary-background'>
      <div className='container min-vh-100 primary-background p-0'>
        <Navbar />
        {children}
      </div>
    </div>

  )
}

export default Layout
