import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { Grid } from './Grid'
import { MovieCard } from './MovieCard'
import { IState } from '../store'
import { IFavouriteMovie } from '../store/favourites/favourites-slice'

export const FavouritesGrid: FunctionComponent = () => {
  const { favouriteMovies } = useSelector((state: IState) => state.favourites)

  return (
    <>
      {favouriteMovies.length > 0 &&
        <Grid>
          {favouriteMovies.map((movie: IFavouriteMovie) => <MovieCard key={movie.id} {...movie} />)}
        </Grid>}
      {favouriteMovies.length === 0 &&
        <p className='text-3xl font-bold md:text-5xl text-secondary-50'>
          You have no favourite movies yet
        </p>}
    </>
  )
}
