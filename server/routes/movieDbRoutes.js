const express = require('express')
const router = express.Router()
const getGenres = require('../controllers/movieDb/getGenres')
const getMovies = require('../controllers/movieDb/getMovies')
const searchMovies = require('../controllers/movieDb/searchMovies')

router.get('/genres', getGenres)

router.get('/movies/:genreId', getMovies)

router.get('/search-movies/:searchTerm', searchMovies)

module.exports = router
