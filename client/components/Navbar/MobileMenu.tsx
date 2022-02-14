import { useState } from 'react'
import styled from 'styled-components'

const HamburgerWrapper = styled.div`
  position: relative;
  height: 20px;
  width: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Line = styled.span`
  display: block;
  height: 3px;
  background-color: ${props => props.theme.secondaryColor};
`

const Line1 = styled(Line)<{isMenuOpen: boolean}>`
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
  ${props => props.isMenuOpen && 'transform: rotate(45deg);'}
`

const Line2 = styled(Line)<{isMenuOpen: boolean}>`
  transition: transform 0.2s ease-in-out;
  ${props => props.isMenuOpen && 'transform: scaleY(0);'}
`

const Line3 = styled(Line)<{isMenuOpen: boolean}>`
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
  ${props => props.isMenuOpen && 'transform: rotate(-45deg);'}
`

interface Props {
  menuItems: {
    name: string,
    linksTo: string
  }[]
}

const MobileMenu = ({ menuItems }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const onClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <HamburgerWrapper onClick={onClick}>
      <Line1 isMenuOpen={isMenuOpen} />
      <Line2 isMenuOpen={isMenuOpen} />
      <Line3 isMenuOpen={isMenuOpen} />
    </HamburgerWrapper>
  )
}

export default MobileMenu
