import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Item = styled.a<{ isActive: boolean }>`
  color: ${props => props.isActive ? props.theme.tertiaryColor : props.theme.secondaryColor};
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  margin-left: 30px;
  transition: .3s;
  position: relative;
  padding-bottom: 7px;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${props => props.theme.tertiaryColor};
    ${props => props.isActive ? '' : 'visibility: hidden; transform: scaleX(0);'}
    transition: all 0.3s ease-in-out; 
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }

  &:hover {
    color: ${props => props.theme.tertiaryColor};
  }
`

interface Props {
  item: {
    name: string,
    linksTo: string
  }
}

const MenuItem = ({ item }: Props) => {
  const {
    name,
    linksTo
  } = item
  const router = useRouter()
  const isActive = router.pathname === linksTo

  return (
    <Link href={linksTo}>
      <Item isActive={isActive}>{name}</Item>
    </Link>
  )
}

export default MenuItem
