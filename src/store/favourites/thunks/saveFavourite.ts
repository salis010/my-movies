import { createAsyncThunk } from '@reduxjs/toolkit'
import { IFavouriteMovie } from '../favourites-slice'

export const saveFavourite = createAsyncThunk(
  'favourites/saveFavourite',
  async (favouriteMovie: IFavouriteMovie): Promise<IFavouriteMovie[]> => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(favouriteMovie)

    }
    const data = await (await (fetch('/database/save-favourite-movie', options))).json()

    return data
  })
