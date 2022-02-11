import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IFavouriteMovie {
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
  }
})

export const favourites = favouritesSlice.reducer
