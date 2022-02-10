import { createAsyncThunk } from '@reduxjs/toolkit'
import { setGenre } from './setGenre'
import { GENRES_URL } from '../../../constants'

export const fetchGenres = createAsyncThunk('movies/fetchGenres', async (_, thunkApi) => {
  const data = await (await (fetch(GENRES_URL))).json()

  await thunkApi.dispatch(setGenre(data.genres[0]))

  return data.genres
})
