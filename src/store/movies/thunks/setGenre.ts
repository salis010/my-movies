import { createAsyncThunk } from '@reduxjs/toolkit'
import { GENRES_URL } from '../../../constants'
import { IGenre } from '../movies-slice'

export const setGenre = createAsyncThunk('movies/setGenre', async (genre: IGenre) => {
  // fetch movies for new genre
  return genre
})
