import styled from 'styled-components'
import { AuthButton } from '../StyledComponents/Buttons'
import { TextInput } from '../StyledComponents/Inputs'
import { SmallBoldText } from '../StyledComponents/Texts'
import { Form } from '../StyledComponents/Forms'
import { FormEvent } from 'react'

const DescriptiveText = styled(SmallBoldText)`
  margin-bottom: 10px;
`

const LoginForm = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <>
      <DescriptiveText>přihlásit se prostřednictvím e-mailu:</DescriptiveText>
      <Form onSubmit={onSubmit}>
        <TextInput placeholder='Email' name='email' type='email' />
        <TextInput placeholder='Heslo' name='password' type='password' />
        <AuthButton>Přihlásit</AuthButton>
      </Form>
    </>
  )
}

export default LoginForm
