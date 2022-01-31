import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import http from "http"
import schema from './schema'

const port = 4001

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ]

const resolvers = {
    Query: {
        books: () => books,
    },
}

const startApolloServer = async (schema: any) => {
    const app = express()
    const httpServer = http.createServer(app)
    const server = new ApolloServer({ schema })
    await server.start()
    server.applyMiddleware({ app })
    app.get('/', (req, res) => res.send('Welcome to dukaty api'))
    app.listen(port, () => console.log(`API listening on port ${port}`))
}

startApolloServer(schema)