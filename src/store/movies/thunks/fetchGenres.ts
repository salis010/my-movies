import { createAsyncThunk } from '@reduxjs/toolkit'
import { setGenre } from './setGenre'

export const fetchGenres = createAsyncThunk('movies/fetchGenres', async (_, thunkApi) => {
  const genres = await (await (fetch('/api/genres'))).json()

  await thunkApi.dispatch(setGenre(genres[1]))

  return genres
})
