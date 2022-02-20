import styled from 'styled-components'

export const SmallBoldText = styled.p`
  font-family: ${props => props.theme.primaryFont};
  color: ${props => props.theme.primaryColor};
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
`
