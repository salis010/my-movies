const express = require('express')
const router = express.Router()
const getGenres = require('../controllers/getGenres')
const getMovies = require('../controllers/getMovies')

router.get('/genres', getGenres)

router.get('/movies/:genre', getMovies)

module.exports = router
