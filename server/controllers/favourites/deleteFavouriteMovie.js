const FavouriteMovie = require('../../db/models')
const getFavouriteMovies = require('./getFavouriteMovies')

const deleteFavouriteMovie = (req, res) => {
  const { body: { id } } = req

  if (!id) {
    res
      .status(400)
      .json({ error: 'No movie was provided' })
  } else {
    FavouriteMovie.remove({ id: id })
      .then(() => {
        getFavouriteMovies(req, res)
      })
      .catch(err => res
        .status(400)
        .json({ error: `Movie with id "${id}" could not be delete from the Favourites collection: ${err}` }))
  }
}

module.exports = deleteFavouriteMovie
