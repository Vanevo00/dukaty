import { FormEvent } from 'react'
import styled from 'styled-components'
import { AuthButton } from '../StyledComponents/Buttons'
import { Form } from '../StyledComponents/Forms'
import { TextInput } from '../StyledComponents/Inputs'
import { SmallBoldText } from '../StyledComponents/Texts'

const DescriptiveText = styled(SmallBoldText)`
  margin-bottom: 10px;
`

const RegisterForm = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit register')
  }

  return (
    <>
      <DescriptiveText>registrovat se prostřednictvím e-mailu:</DescriptiveText>
      <Form onSubmit={onSubmit}>
        <TextInput placeholder='Email' name='email' type='email' />
        <TextInput placeholder='Heslo' name='password' type='password' />
        <AuthButton>Registrovat</AuthButton>
      </Form>
    </>
  )
}

export default RegisterForm
