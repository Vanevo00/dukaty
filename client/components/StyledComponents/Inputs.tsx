import styled from 'styled-components'

export const TextInput = styled.input`
  outline: none;
  width: 268px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid lightgray;
  padding: 0 8px;
  font-family: ${props => props.theme.primaryFont};

  &:focus {
    border-color: ${props => props.theme.primaryColor};
  }
`
