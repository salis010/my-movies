const mongoose = require('mongoose')

mongoose
  .connect('mongodb://127.0.0.1:27017/movies', { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(err => {
    console.error('Connection error:', err.message)
  })

const db = mongoose.connection

db.on('error', err => console.error.bind(console, 'MongoDB connection error:', err))

module.exports = db
