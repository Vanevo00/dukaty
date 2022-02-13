import styled from 'styled-components'
import Logo from './Logo'
import Menu from './Menu'

const NavbarWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;

  @media (max-width: ${props => props.theme.largeScreen}) {
    padding-left: 50px;
    padding-right: 50px;
  }
`

const menuItems = [
  {
    name: 'Domů',
    linksTo: '/'
  },
  {
    name: 'Informace',
    linksTo: '/Informace'
  },
  {
    name: 'Koupit',
    linksTo: '/Koupit'
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
