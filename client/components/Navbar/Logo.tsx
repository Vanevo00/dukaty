import Link from 'next/link'
import styled from 'styled-components'

const LogoLink = styled.a`
  color: ${props => props.theme.secondaryColor};
  text-decoration: none;
  font-family: 'Sriracha', cursive;
  letter-spacing: 2px;
  font-size: 30px;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: ${props => props.theme.secondaryColor};
  }
`

const Logo = () => {
  return (
    <Link href='/'>
      <LogoLink>DUKÁTY.CZ</LogoLink>
    </Link>
  )
}

export default Logo
