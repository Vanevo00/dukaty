import styled from 'styled-components'

const LogoLink = styled.a`
  color: ${props => props.theme.secondaryColor};
  text-decoration: none;
  font-family: 'Sriracha', cursive;
  letter-spacing: 2px;
  font-size: 30px;

  &:hover {
    text-decoration: none;
    color: ${props => props.theme.secondaryColor};
  }
`

const Logo = () => {
  return (
    <LogoLink href='#'>DUKÁTY.CZ</LogoLink>
  )
}

export default Logo
