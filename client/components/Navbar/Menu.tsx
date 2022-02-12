import styled from 'styled-components'
import MenuItem from './MenuItem'
import MobileNavbarToggler from './MobileNavbarToggler'

const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

interface Props {
  menuItems: {
    name: string
  }[]
}

const Menu = ({ menuItems }: Props) => {
  return (
    <MenuWrapper>
      {/* <MobileNavbarToggler /> */}
      {menuItems.map((item) => <MenuItem key={item.name} item={item} />)}
    </MenuWrapper>
  )
}

export default Menu
