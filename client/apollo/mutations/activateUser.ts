import { gql } from '@apollo/client'

export const ACTIVATE_USER = gql`
  mutation($activationCode: String!) {
    activateUser (activationCode: $activationCode) {
      _id
      email
    }
  }
`
