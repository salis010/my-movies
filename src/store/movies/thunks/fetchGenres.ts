import { createAsyncThunk } from '@reduxjs/toolkit'
import { GENRES_URL } from '../../../constants'

export const fetchGenres = createAsyncThunk('movies/fetchGenres', async () => {
  const data = await (await (fetch(GENRES_URL))).json()

  return data.genres
})
