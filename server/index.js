const express = require('express')
const path = require('path')
const router = require('./routes/movieDbRoutes')

const app = express()
const port = 4000

app.use('/api', router)

app.use(express.static(path.join(__dirname, '../dist')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
