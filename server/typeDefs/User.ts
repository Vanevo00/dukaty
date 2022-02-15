import { gql } from 'apollo-server-express'

export default gql`
    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        activated: Boolean!
        updated: Date!
        created: Date!
    }

    extend type Query {
        checkUserToken: User
    }

    extend type Mutation {
        registerUser(
            email: String!
            password: String!
        ): User

        loginByPassword(
            email: String!
            password: String!
        ): User

        logout: Boolean!
    }
`
