import { createAsyncThunk } from '@reduxjs/toolkit'
import { pruneMoviesData } from '../../../utils/pruneMoviesData'
import { IMovie } from '../movies-slice'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (genreId: number): Promise<IMovie[]> => {
  const data = await (await (fetch(`/api/movies/${genreId}`))).json()

  const prunedData = pruneMoviesData(data)

  return prunedData
})
