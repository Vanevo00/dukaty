import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import http from 'http'
import schema from './schema'
import { connectDB } from './utils/connectDB'
import cookieParser from 'cookie-parser'

const port = 4001

const corsOptions = {
  origin: true,
  credentials: true
}

const startApolloServer = async (schema: any) => {
  const app = express()
  const httpServer = http.createServer(app)
  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res })
  })
  await server.start()
  connectDB()
  app.use(cookieParser())
  server.applyMiddleware({ app, cors: corsOptions })
  app.get('/', (req, res) => res.send('Welcome to dukaty api'))
  app.listen(port, () => console.log(`API listening on port ${port}`))
}

startApolloServer(schema)
