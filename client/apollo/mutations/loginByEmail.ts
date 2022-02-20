import { gql } from '@apollo/client'

export const LOGIN_BY_EMAIL = gql`
  mutation(
    $email: String!,
    $password: String!
  ) {
    loginByEmail (
      email: $email,
      password: $password
    ) {
      _id
      name
      email
      password
      activated
      updated
      created
    }
  }
`
