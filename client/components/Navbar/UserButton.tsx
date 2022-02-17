import { MouseEventHandler, useState } from 'react'
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
  mobileVersion?: boolean,
  isAuthOpen: boolean,
  toggleAuth: MouseEventHandler<HTMLButtonElement>,
  closeAuth: MouseEventHandler<HTMLDivElement>
}

const UserButton = ({ mobileVersion, isAuthOpen, toggleAuth, closeAuth }: Props) => {
  return (
    <>
      <LoginButton isActive={isAuthOpen} onClick={toggleAuth}><i className='fa-regular fa-user' />{!mobileVersion && ' PŘIHLÁŠENÍ'}</LoginButton>
      <PopupWrapper isOpen={isAuthOpen}>
        <Popup>
          <CloseButton onClick={closeAuth} />
        </Popup>
      </PopupWrapper>
    </>
  )
}

export default UserButton
