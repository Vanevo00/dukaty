import styled from 'styled-components'
import Logo from './Logo'
import Menu from './Menu'

const NavbarWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
`

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

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo />
      <Menu menuItems={menuItems} />
    </NavbarWrapper>
  )
}

export default Navbar
