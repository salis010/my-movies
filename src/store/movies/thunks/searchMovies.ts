import { createAsyncThunk } from '@reduxjs/toolkit'
import { IMovie } from '../movies-slice'

export const searchMovies = createAsyncThunk('movies/searchMovies', async (searchTerm: string): Promise<IMovie[]> => {
  const data = await (await (fetch(`/api/search-movies/${searchTerm}`))).json()

  const prunedData = data.map(movie => ({
    id: movie.id,
    title: movie.title,
    posterPath: movie.poster_path,
    genreIds: movie.genre_ids
  }))

  return prunedData
})
