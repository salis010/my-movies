const axios = require('axios')
const constants = require('./constants')

const { SEARCH_MOVIES_URL } = constants

const searchMovies = async (req, res) => {
  const data = (await (axios.get(SEARCH_MOVIES_URL, { params: { query: req.params.searchTerm } }))).data

  res.status(200).json(data.results)
}

module.exports = searchMovies
