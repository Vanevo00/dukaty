import { ChangeEvent, FormEvent, useState } from 'react'
import styled from 'styled-components'
import { apolloClient } from '../../apollo/apolloClient'
import { AuthButton } from '../StyledComponents/Buttons'
import { Form } from '../StyledComponents/Forms'
import { TextInput } from '../StyledComponents/Inputs'
import { ErrorMessage, SmallBoldText, SuccessMessage } from '../StyledComponents/Texts'
import { removeErrorFromErrorMessage } from '../../utils/textHandling'
import { REGISTER_BY_EMAIL } from '../../apollo/mutations/registerByEmail'
import Spinner from '../StyledComponents/Spinner'

const DescriptiveText = styled(SmallBoldText)`
  margin-bottom: 10px;
`

const StyledSuccessMessage = styled(SuccessMessage)`
  width: 268px;
`

const StyledErrorMessage = styled(ErrorMessage)`
  width: 268px;
`

const RegisterForm = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
    passwordConfirmation: ''
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false)

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
        password,
        passwordConfirmation
      } = inputValues

      if (password !== passwordConfirmation) {
        setErrorMessage('Hesla se neshodují')
        setIsSending(false)
        return
      }

      await apolloClient.mutate({
        mutation: REGISTER_BY_EMAIL,
        variables: {
          email,
          password
        }
      })
      setIsRegistrationSuccessful(true)
    } catch (err: any) {
      setErrorMessage(removeErrorFromErrorMessage(err.message))
    }
    setIsSending(false)
  }

  return (
    <>
      <DescriptiveText>registrovat se prostřednictvím e-mailu:</DescriptiveText>
      <Form onSubmit={onSubmit}>
        <TextInput placeholder='Email' name='email' type='email' onChange={onChange} />
        <TextInput placeholder='Heslo' name='password' type='password' onChange={onChange} />
        <TextInput placeholder='Heslo znovu' name='passwordConfirmation' type='password' onChange={onChange} />
        {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
        {isRegistrationSuccessful && <StyledSuccessMessage>Registrace proběhla úšpěšně. Na email {inputValues.email} byla zaslána zpráva s potvrzením registrace.</StyledSuccessMessage>}
        <AuthButton>{isSending ? <Spinner /> : isRegistrationSuccessful ? <i className='fa-solid fa-check fa-lg' /> : 'Registrovat'}</AuthButton>
      </Form>
    </>
  )
}

export default RegisterForm
