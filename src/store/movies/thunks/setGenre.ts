import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchMovies } from './fetchMovies'
import { IGenre } from '../movies-slice'

export const setGenre = createAsyncThunk('movies/setGenre', async (genre: IGenre, thunkApi) => {
  await thunkApi.dispatch(fetchMovies(genre.name))

  return genre
})
