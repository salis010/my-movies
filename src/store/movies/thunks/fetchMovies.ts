import { createAsyncThunk } from '@reduxjs/toolkit'
import { GENRE_MOVIES_URL } from '../../../constants'
import { IMovie } from '../movies-slice'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (genre: string): Promise<IMovie[]> => {
  const data = await (await (fetch(`${GENRE_MOVIES_URL}${genre}`))).json()

  return data.results
})
