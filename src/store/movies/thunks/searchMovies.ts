import { createAsyncThunk } from '@reduxjs/toolkit'
import { pruneMoviesData } from '../../../utils/pruneMoviesData'
import { IMovie } from '../movies-slice'

export const searchMovies = createAsyncThunk('movies/searchMovies', async (searchTerm: string): Promise<IMovie[]> => {
  const data = await (await (fetch(`/api/search-movies/${searchTerm}`))).json()

  const prunedData = pruneMoviesData(data)

  return prunedData
})
