const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const db = require('./db/mongoose')
const movieDbRouter = require('./routes/movieDbRoutes')
const favouritesRouter = require('./routes/favouriteRoutes')

const app = express()
const port = 4000

app.use(bodyParser.json())

db.once('open', () => {
  console.log('Successfully connected to Mongo database "movies"')
})

db.on('error', err => console.error.bind(console, 'MongoDB connection error:', err))

app.use('/api', movieDbRouter)

app.use('/database', favouritesRouter)

app.use(express.static(path.join(__dirname, '../dist')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
