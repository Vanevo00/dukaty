import Link from 'next/link'
import styled from 'styled-components'

const LogoLink = styled.a`
  color: ${props => props.theme.secondaryColor};
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  letter-spacing: 5px;
  font-size: 30px;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: ${props => props.theme.secondaryColor};
  }

  @media (max-width: ${props => props.theme.mobileScreen}) {
    font-size: 20px;
    letter-spacing: 4px;
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
