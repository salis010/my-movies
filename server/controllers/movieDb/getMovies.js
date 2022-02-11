const axios = require('axios')
const constants = require('./constants')

const { GENRE_MOVIES_URL } = constants

const getMovies = async (req, res) => {
  const data = (await (axios.get(GENRE_MOVIES_URL, { params: { with_genres: req.params.genreId } }))).data

  res.status(200).json(data.results)
}

module.exports = getMovies
