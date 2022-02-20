import { CloseButton, Popup, PopupWrapper } from '../Popup'
import { MouseEventHandler, useState } from 'react'
import styled from 'styled-components'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const SwitchContainer = styled.div`
  height: 98px;
  width: 100%;
  border-bottom: solid lightgray 1px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 30px;
`

const SwitchButton = styled.button<{ last?: boolean, active: boolean }>`
  background: none;
  border: none;
  border-bottom: solid 4px ${props => props.active ? props.theme.tertiaryColor : props.theme.secondaryColor};
  padding-bottom: 10px;
  font-family: ${props => props.theme.primaryFont};
  color: ${props => props.theme.primaryColor};
  font-weight: 600;
  cursor: pointer;
  ${props => props.last && 'margin-left: 40px;'}
`

const AuthFormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface Props {
  isAuthOpen: boolean,
  closeAuth: MouseEventHandler<HTMLDivElement>
}

const AuthPopup = ({ isAuthOpen, closeAuth }: Props) => {
  const [activeSection, setActiveSection] = useState('login')

  return (
    <PopupWrapper isOpen={isAuthOpen}>
      <Popup>
        <CloseButton onClick={closeAuth} />
        <SwitchContainer>
          <SwitchButton active={activeSection === 'login'} onClick={() => setActiveSection('login')}>PŘIHLÁSIT</SwitchButton>
          <SwitchButton active={activeSection === 'register'} onClick={() => setActiveSection('register')} last>REGISTRACE</SwitchButton>
        </SwitchContainer>
        <AuthFormWrapper>
          {activeSection === 'login' && <LoginForm />}
          {activeSection === 'register' && <RegisterForm />}
        </AuthFormWrapper>
      </Popup>
    </PopupWrapper>
  )
}

export default AuthPopup
