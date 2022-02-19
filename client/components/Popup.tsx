import styled from 'styled-components'

export const PopupWrapper = styled.div<{isOpen: boolean}>`
  position: absolute;
  background-color: rgba(0, 0, 0, .2);
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
`

export const Popup = styled.div`
  position: absolute;
  background-color: ${props => props.theme.secondaryColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  width: 468px;

  @media (max-width: ${props => props.theme.mobileScreen}) {
    width: 95%;
    height: 88vh;
    bottom: 2vh;
    right: 2.5%;
  }
`

export const CloseButton = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 10px;
  top: 10px;
  cursor: pointer;

  &:before, &:after {
    position: absolute;
    content: ' ';
    right: 10px;
    height: 20px;
    width: 2px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`
