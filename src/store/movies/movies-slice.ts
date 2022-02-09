import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchGenres } from './thunks/fetchGenres'
import { setGenre } from './thunks/setGenre'

export interface IGenre {
  id: number
  name: string
}

export interface IMovies {
  genres: IGenre[]
  selectedGenre: IGenre | undefined
}

export const moviesInitialState: IMovies = {
  genres: [],
  selectedGenre: undefined
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: moviesInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGenres.fulfilled, (state, action: PayloadAction<IGenre[]>) => {
        state.genres = action.payload
        state.selectedGenre = action.payload[0]
      })
      .addCase(setGenre.fulfilled, (state, action: PayloadAction<IGenre>) => {
        state.selectedGenre = action.payload
      })
  }
})

export const movies = moviesSlice.reducer
