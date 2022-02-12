import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { Grid } from './Grid'
import { MovieCard } from './MovieCard'
import { IState } from '../store'
import { IMovie } from '../store/movies/movies-slice'

export const Movies: FunctionComponent = () => {
  const { isDisplaySearchedMovies, movies, searchedMovies } = useSelector((state: IState) => state.movies)

  return (
    <>
      {movies.length > 0 &&
        <Grid>
          {!isDisplaySearchedMovies && movies.map((movie: IMovie) => <MovieCard key={movie.id} {...movie} />)}
          {isDisplaySearchedMovies && searchedMovies.map((movie: IMovie) => <MovieCard key={movie.id} {...movie} />)}
          {isDisplaySearchedMovies && searchedMovies.length === 0 &&
            <p className='text-5xl font-bold text-secondary-50'>
              No matching movies found
            </p>}
        </Grid>}
    </>
  )
}
