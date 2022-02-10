import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { ui, uiInitialState, IUI } from './ui/ui-slice'
import { movies, moviesInitialState, IMovies } from './movies/movies-slice'

export interface IState {
  ui: IUI
  movies: IMovies
}

const initialState: IState = {
  ui: uiInitialState,
  movies: moviesInitialState
}

const reducer = {
  ui,
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
