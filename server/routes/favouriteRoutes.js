const express = require('express')
const router = express.Router()
const getFavouriteMovies = require('../controllers/favourites/getFavouriteMovies')
const saveFavouriteMovie = require('../controllers/favourites/saveFavouriteMovie')
const deleteFavouriteMovie = require('../controllers/favourites/deleteFavouriteMovie')

router.get('/get-favourite-movies', getFavouriteMovies)

router.post('/save-favourite-movie', saveFavouriteMovie)

router.delete('/delete-favourite-movie', deleteFavouriteMovie)

module.exports = router
