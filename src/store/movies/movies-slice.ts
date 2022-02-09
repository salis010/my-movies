import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IGenre {
  id: number
  name: string
}

export interface IMovies {
  genres: IGenre[]
}

export const moviesInitialState: IMovies = {
  genres: []
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: moviesInitialState,
  reducers: {
    setGenres: (state, action: PayloadAction<IGenre[]>) => { state.genres = action.payload }
  }
})

export const {
  setGenres
} = moviesSlice.actions

export const movies = moviesSlice.reducer
