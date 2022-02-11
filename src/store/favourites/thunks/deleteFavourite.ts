import { createAsyncThunk } from '@reduxjs/toolkit'
import { IFavouriteMovie } from '../favourites-slice'

export const deleteFavourite = createAsyncThunk('favourites/deleteFavourite', async (id: number): Promise<IFavouriteMovie[]> => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id })

  }
  const data = await (await (fetch('/database/remove-favourite-movie', options))).json()

  return data
})
