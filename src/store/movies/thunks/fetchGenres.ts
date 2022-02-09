import { createAsyncThunk } from '@reduxjs/toolkit'
import { setGenres } from '../movies-slice'
import { GENRES_URL } from '../../../constants'

export const fetchGenres = createAsyncThunk('movies/fetchGenres', async (_, thunkApi) => {
  const data = await (await (fetch(GENRES_URL))).json()

  thunkApi.dispatch(setGenres(data.genres))

  return data
})
