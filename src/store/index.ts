import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { ui, uiInitialState, IUI } from './ui/ui-slice'
import { movies, moviesInitialState, IMovies } from './movies/movies-slice'
import { favourites, favouritesInitialState, IFavourites } from './favourites/favourites-slice'

export interface IState {
  ui: IUI
  movies: IMovies
  favouriteMovies: IFavourites
}

const initialState: IState = {
  ui: uiInitialState,
  movies: moviesInitialState,
  favouriteMovies: favouritesInitialState
}

const reducer = {
  ui,
  movies,
  favourites
}

const initStore = (preloadedState = initialState): EnhancedStore => configureStore({
  reducer,
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export const store = initStore(initialState)
