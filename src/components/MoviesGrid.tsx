import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { MovieCard } from './MovieCard'
import { IState } from '../store'
import { IMovie } from '../store/movies/movies-slice'

export const MoviesGrid: FunctionComponent = () => {
  const { isDisplaySearchedMovies, movies, searchedMovies } = useSelector((state: IState) => state.movies)

  const columnsStyling = 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'
  const xGapStyling = 'gap-x-8 sm:gap-x-12 xl:gap-x-16'
  const yGapStyling = 'gap-y-12'

  return (
    <>
      {movies.length > 0 &&
        <div className={`grid mt-12 ${columnsStyling} ${xGapStyling} ${yGapStyling}`}>
          {!isDisplaySearchedMovies && movies.map((movie: IMovie) => <MovieCard key={movie.id} {...movie} />)}
          {isDisplaySearchedMovies && searchedMovies.map((movie: IMovie) => <MovieCard key={movie.id} {...movie} />)}
          {isDisplaySearchedMovies && searchedMovies.length === 0 &&
            <p className='text-5xl font-bold text-secondary-50'>
              No matching movies found
            </p>}
        </div>}

    </>
  )
}
