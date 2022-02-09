import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { movies, moviesInitialState, IMovies } from './movies/movies-slice'

export interface IState {
  movies: IMovies
}

const initialState: IState = {
  movies: moviesInitialState
}

const reducer = {
  movies
}

const initStore = (preloadedState = initialState): EnhancedStore => configureStore({
  reducer,
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export const store = initStore(initialState)
