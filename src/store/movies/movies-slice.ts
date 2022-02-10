import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchGenres } from './thunks/fetchGenres'
import { setGenre } from './thunks/setGenre'
import { fetchMovies } from './thunks/fetchMovies'
import { searchMovies } from './thunks/searchMovies'

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
  searchMovies: IMovie[]
  searchTerm: string
}

export const moviesInitialState: IMovies = {
  genres: [],
  selectedGenre: undefined,
  movies: [],
  searchMovies: [],
  searchTerm: ''
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: moviesInitialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => { state.searchTerm = action.payload }
  },
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
      .addCase(searchMovies.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
        state.searchMovies = action.payload
      })
  }
})

export const {
  setSearchTerm
} = moviesSlice.actions

export const movies = moviesSlice.reducer
