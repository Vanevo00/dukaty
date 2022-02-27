import { gql } from '@apollo/client'

export const REGISTER_BY_EMAIL = gql`
  mutation(
    $email: String!,
    $password: String!
  ) {
    registerUser (
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
