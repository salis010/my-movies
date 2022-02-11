const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FavouriteMovie = new Schema(
  {
    id: Number,
    title: String,
    posterPath: String
  }
)

const FavouriteMovieModel = mongoose.model('favouriteMovie', FavouriteMovie, 'favourites')

module.exports = FavouriteMovieModel
