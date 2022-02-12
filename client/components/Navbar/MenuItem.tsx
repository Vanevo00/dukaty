import styled from 'styled-components'

const Item = styled.a`
  color: ${props => props.theme.secondaryColor};
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  text-decoration: none;
  margin-left: 30px;
  transition: .3s;
  position: relative;
  padding-bottom: 7px;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${props => props.theme.tertiaryColor};
    visibility: hidden;
    transform: scaleX(0);
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
    name: string
  }
}

const MenuItem = ({ item }: Props) => {
  return (
    <Item href='#'>{item.name}</Item>
  )
}

export default MenuItem
