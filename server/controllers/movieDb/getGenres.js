const axios = require('axios')
const constants = require('./constants')

const { GENRES_URL } = constants

const getGenres = async (req, res) => {
  const data = (await (axios.get(GENRES_URL))).data

  res.status(200).json(data.genres)
}

module.exports = getGenres
