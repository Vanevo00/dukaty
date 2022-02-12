import React, { FunctionComponent } from 'react'
import Navbar from './Navbar'

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className='container-fluid min-vh-100 secondary-background p-0'>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
