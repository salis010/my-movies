import { createAsyncThunk } from '@reduxjs/toolkit'
import { IFavouriteMovie } from '../favourites-slice'

export const fetchFavourites = createAsyncThunk('favourites/fetchFavourites', async (): Promise<IFavouriteMovie[]> => {
  const data = await (await (fetch('/database/get-favourite-movies'))).json()

  return data
})
