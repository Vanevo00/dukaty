import { useEffect, useState } from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'
import MobileMenu from './MobileMenu'

const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

interface Props {
  menuItems: {
    name: string,
    linksTo: string
  }[]
}

const Menu = ({ menuItems }: Props) => {
  const [isMobile, setIsMobile] = useState(false)
  const [isDeviceWidthDetermined, setIsDeviceWidthDetermined] = useState(false)

  useEffect(() => {
    if (window.innerWidth <= 800) {
      setIsMobile(true)
    }
    setIsDeviceWidthDetermined(true)
  }, [])

  if (!isDeviceWidthDetermined) return null

  if (isMobile) {
    return (
      <MobileMenu menuItems={menuItems} />
    )
  }

  return (
    <MenuWrapper>
      {menuItems.map((item) => <MenuItem key={item.name} item={item} />)}
    </MenuWrapper>
  )
}

export default Menu
