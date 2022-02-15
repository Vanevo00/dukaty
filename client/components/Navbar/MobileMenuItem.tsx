import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Item = styled.a<{ isActive: boolean }>`
  color: ${props => props.isActive ? props.theme.tertiaryColor : props.theme.primaryColor};
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  margin-bottom: 15px;
`

interface Props {
  item: {
    name: string,
    linksTo: string
  }
}

const MobileMenuItem = ({ item }: Props) => {
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

export default MobileMenuItem
