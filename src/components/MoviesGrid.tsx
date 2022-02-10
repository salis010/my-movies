import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { MovieCard } from './MovieCard'
import { IState } from '../store'
import { IMovie } from '../store/movies/movies-slice'

export const MoviesGrid: FunctionComponent = () => {
  const { movies } = useSelector((state: IState) => state.movies)

  return (
    <>
      {movies.length > 0 &&
        <div className='flex flex-wrap mt-24'>
          {movies.map((movie: IMovie) => <MovieCard key={movie.id} {...movie} />)}
        </div>}
    </>
  )
}
