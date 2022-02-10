const express = require('express')
const router = express.Router()
const getGenres = require('../controllers/getGenres')
const getMovies = require('../controllers/getMovies')
const searchMovies = require('../controllers/searchMovies')

router.get('/genres', getGenres)

router.get('/movies/:genreId', getMovies)

router.get('/search-movies/:searchTerm', searchMovies)

module.exports = router
