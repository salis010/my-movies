import { createAsyncThunk } from '@reduxjs/toolkit'
import { GENRE_MOVIES_URL } from '../../../constants'
import { IMovie } from '../movies-slice'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (genre: string): Promise<IMovie[]> => {
  const data = await (await (fetch(`${GENRE_MOVIES_URL}${genre}`))).json()

  const prunedData = data.results.map(movie => ({
    id: movie.id,
    title: movie.title,
    posterPath: movie.poster_path,
    genreIds: movie.genre_ids
  }))

  console.log(genre)
  console.log(`${GENRE_MOVIES_URL}${genre}`)
  console.log(data)
  return prunedData
})
