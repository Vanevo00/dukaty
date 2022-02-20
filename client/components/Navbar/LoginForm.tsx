import styled from 'styled-components'
import { AuthButton } from '../StyledComponents/Buttons'
import { TextInput } from '../StyledComponents/Inputs'
import { ErrorMessage, SmallBoldText } from '../StyledComponents/Texts'
import { Form } from '../StyledComponents/Forms'
import { ChangeEvent, FormEvent, useState } from 'react'
import { apolloClient } from '../../apollo/apolloClient'
import { LOGIN_BY_EMAIL } from '../../apollo/mutations/loginByEmail'

const DescriptiveText = styled(SmallBoldText)`
  margin-bottom: 10px;
`

const LoginForm = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: ''
  })
  const [errorMessage, setErrorMessage] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const {
        email,
        password
      } = inputValues

      const user = await apolloClient.mutate({
        mutation: LOGIN_BY_EMAIL,
        variables: {
          email,
          password
        }
      })
    } catch (err: any) {
      setErrorMessage(err.message)
    }
  }

  return (
    <>
      <DescriptiveText>přihlásit se prostřednictvím e-mailu:</DescriptiveText>
      <Form onSubmit={onSubmit}>
        <TextInput placeholder='Email' name='email' type='email' onChange={onChange} value={inputValues.email} />
        <TextInput placeholder='Heslo' name='password' type='password' onChange={onChange} value={inputValues.password} />
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <AuthButton>Přihlásit</AuthButton>
      </Form>
    </>
  )
}

export default LoginForm
