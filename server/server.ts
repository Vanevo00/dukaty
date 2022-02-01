import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import http from "http"
import schema from './schema'
import { connectDB } from './utils/connectDB'

const port = 4001

const startApolloServer = async (schema: any) => {
    const app = express()
    const httpServer = http.createServer(app)
    const server = new ApolloServer({ schema })
    await server.start()
    connectDB()
    server.applyMiddleware({ app })
    app.get('/', (req, res) => res.send('Welcome to dukaty api'))
    app.listen(port, () => console.log(`API listening on port ${port}`))
}

startApolloServer(schema)