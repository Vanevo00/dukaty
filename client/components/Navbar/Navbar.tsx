import React, { FunctionComponent } from 'react'
import Logo from './Logo'
import Menu from './Menu'

const menuItems = [
  {
    name: 'Domů'
  },
  {
    name: 'Nákup'
  },
  {
    name: 'Prodej'
  }
]

const Navbar: FunctionComponent = ({ children }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <Logo />
      <Menu menuItems={menuItems} />
    </nav>
  )
}

export default Navbar
