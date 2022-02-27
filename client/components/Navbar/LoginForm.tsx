import styled from 'styled-components'
import { AuthButton } from '../StyledComponents/Buttons'
import { TextInput } from '../StyledComponents/Inputs'
import { ErrorMessage, SmallBoldText } from '../StyledComponents/Texts'
import { Form } from '../StyledComponents/Forms'
import { ChangeEvent, FormEvent, useState } from 'react'
import { apolloClient } from '../../apollo/apolloClient'
import { LOGIN_BY_EMAIL } from '../../apollo/mutations/loginByEmail'
import { removeErrorFromErrorMessage } from '../../utils/textHandling'
import Spinner from '../StyledComponents/Spinner'

const DescriptiveText = styled(SmallBoldText)`
  margin-bottom: 10px;
`

const LoginForm = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: ''
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMessage('')
    setIsSending(true)

    try {
      const {
        email,
        password
      } = inputValues

      await apolloClient.mutate({
        mutation: LOGIN_BY_EMAIL,
        variables: {
          email,
          password
        }
      })
      setIsLoginSuccessful(true)
    } catch (err: any) {
      setErrorMessage(removeErrorFromErrorMessage(err.message))
    }
    setIsSending(false)
  }

  return (
    <>
      <DescriptiveText>přihlásit se prostřednictvím e-mailu:</DescriptiveText>
      <Form onSubmit={onSubmit}>
        <TextInput placeholder='Email' name='email' type='email' onChange={onChange} value={inputValues.email} />
        <TextInput placeholder='Heslo' name='password' type='password' onChange={onChange} value={inputValues.password} />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <AuthButton>{isSending ? <Spinner /> : isLoginSuccessful ? <i className='fa-solid fa-check fa-lg' /> : 'Přihlásit'}</AuthButton>
      </Form>
    </>
  )
}

export default LoginForm
