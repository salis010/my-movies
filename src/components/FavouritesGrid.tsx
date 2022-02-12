import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { MovieCard } from './MovieCard'
import { IState } from '../store'
import { IFavouriteMovie } from '../store/favourites/favourites-slice'

export const FavouritesGrid: FunctionComponent = () => {
  const { favouriteMovies } = useSelector((state: IState) => state.favourites)

  return (
    <>
      {favouriteMovies.length > 0 &&
        <div className='flex flex-wrap mt-24'>
          {favouriteMovies.map((movie: IFavouriteMovie) => <MovieCard key={movie.id} {...movie} />)}
        </div>}
      {favouriteMovies.length === 0 &&
        <p className='text-3xl font-bold md:text-5xl text-secondary-50'>
          You have no favourite movies yet
        </p>}
    </>
  )
}
