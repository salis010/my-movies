import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchFavourites } from './thunks/fetchFavourites'
import { saveFavourite } from './thunks/saveFavourite'

export interface IFavouriteMovie {
  id: number
  title: string
  posterPath: string
}

export interface IFavourites {
  favouriteMovies: IFavouriteMovie[]
}

export const favouritesInitialState: IFavourites = {
  favouriteMovies: []
}

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: favouritesInitialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFavourites.fulfilled, (state, action: PayloadAction<IFavouriteMovie[]>) => {
        state.favouriteMovies = action.payload
      })
      .addCase(saveFavourite.fulfilled, (state, action: PayloadAction<IFavouriteMovie[]>) => {
        state.favouriteMovies = action.payload
      })
  }
})

export const favourites = favouritesSlice.reducer
