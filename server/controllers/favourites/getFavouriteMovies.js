const FavouriteMovie = require('../../db/models')

const getFavouriteMovies = (req, res) => {
  FavouriteMovie.find({})
    .then((allMovies) => {
      console.log(allMovies)
      res
        .status(201)
        .json(allMovies)
    })
    .catch(err => res
      .status(400)
      .json({ error: `There was an error with reading all the movies in the Favourites collection: ${err}` }))
}

module.exports = getFavouriteMovies
