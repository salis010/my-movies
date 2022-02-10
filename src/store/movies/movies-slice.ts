import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchGenres } from './thunks/fetchGenres'
import { setGenre } from './thunks/setGenre'
import { fetchMovies } from './thunks/fetchMovies'

export interface IGenre {
  id: number
  name: string
}

export interface IMovie {
  id: number
  title: string
  posterPath: string
  genreIds: number[]
}

export interface IMovies {
  genres: IGenre[]
  selectedGenre: IGenre | undefined
  movies: IMovie[]
}

export const moviesInitialState: IMovies = {
  genres: [],
  selectedGenre: undefined,
  movies: []
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: moviesInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGenres.fulfilled, (state, action: PayloadAction<IGenre[]>) => {
        state.genres = action.payload
      })
      .addCase(setGenre.fulfilled, (state, action: PayloadAction<IGenre>) => {
        state.selectedGenre = action.payload
      })
      .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
        state.movies = action.payload
      })
  }
})

export const movies = moviesSlice.reducer
