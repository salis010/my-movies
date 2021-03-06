const FavouriteMovie = require('../../db/models')
const getFavouriteMovies = require('./getFavouriteMovies')

const saveFavouriteMovie = (req, res) => {
  const { body } = req

  if (!body) {
    res
      .status(400)
      .json({ error: 'No movie was provided' })
  } else {
    const newMovie = new FavouriteMovie(body)

    if (!newMovie) {
      res.status(400).json({ error: 'Failed to create FavouriteMovie instance' })
    } else {
      newMovie.save()
        .then(() => {
          getFavouriteMovies(req, res)
        })
        .catch(err => res
          .status(400)
          .json({ error: `Movie "${body.title}" could not be added to the Favourites collection: ${err}` }))
    }
  }
}

module.exports = saveFavouriteMovie
