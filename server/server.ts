import express from 'express'

const port = 3666

const app = express()

app.get('/', (req, res) => res.send('pes'))

app.listen(port, () => console.log(`API listening on port ${port}`))