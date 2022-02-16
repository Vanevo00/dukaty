import { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../Buttons'
import { CloseButton, Popup, PopupWrapper } from '../Popup'

const LoginButton = styled(Button)<{ isActive: boolean }>`
  margin-left: 30px;
  transition: .4s;
  z-index: 2;
  color: ${props => props.isActive ? props.theme.primaryColor : props.theme.secondaryColor};
  background-color: ${props => props.isActive ? props.theme.secondaryColor : props.theme.primaryColor};

  @media (max-width: ${props => props.theme.mobileScreen}) {
    width: 32px;
    height: 32px;
    margin: 0;
  }
`

interface Props {
  mobileVersion?: boolean
}

const UserButton = ({ mobileVersion }: Props) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false)

  const onClick = () => {
    setIsAuthOpen(!isAuthOpen)
  }

  const onClose = () => {
    setIsAuthOpen(false)
  }

  return (
    <>
      <LoginButton isActive={isAuthOpen} onClick={onClick}><i className='fa-regular fa-user' />{!mobileVersion && ' PŘIHLÁŠENÍ'}</LoginButton>
      <PopupWrapper isOpen={isAuthOpen}>
        <Popup>
          <CloseButton onClick={onClose} />
        </Popup>
      </PopupWrapper>
    </>
  )
}

export default UserButton
