import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.secondaryColor};
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  border: 2px solid ${props => props.theme.secondaryColor};
  padding: 4px 6px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.lightPrimaryColor};
  }
`

export const WideButton = styled(Button)`
  width: 100%;
`

export const AuthButton = styled(WideButton)`
  width: 268px;
  height: 40px;
`
