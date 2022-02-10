import { createAsyncThunk } from '@reduxjs/toolkit'
import { IMovie } from '../movies-slice'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (genreId: number): Promise<IMovie[]> => {
  const data = await (await (fetch(`/api/movies/${genreId}`))).json()

  const prunedData = data.map(movie => ({
    id: movie.id,
    title: movie.title,
    posterPath: movie.poster_path,
    genreIds: movie.genre_ids
  }))

  return prunedData
})
