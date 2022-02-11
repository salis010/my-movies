const FavouriteMovie = require('../../db/models')

const saveFavouriteMovie = (req, res) => {
  const { body } = req

  if (!body) {
    res
      .status(400)
      .json({ error: 'No movie was provided' })
  } else {
    const movie = new FavouriteMovie(body)

    if (!movie) {
      res.status(400).json({ error: 'Failed to create FavouriteMovie instance' })
    } else {
      const newMovie = new FavouriteMovie(body)

      newMovie.save()
        .then(() => res
          .status(201)
          .json({ message: `Movie "${body.title}" has been added to the Favourites collection.` })
        )
        .catch(err => res
          .status(400)
          .json({ error: `Movie "${body.title}" could not be added to the Favourites collection: ${err}` }))
    }
  }
}

module.exports = saveFavouriteMovie
