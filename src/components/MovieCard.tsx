import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { HeartIcon } from '../images/HeartIcon'
import { IState } from '../store'
import { IFavouriteMovie } from '../store/favourites'

interface IMovieCard {
  id: number
  title: string
  posterPath: string
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w185'

export const MovieCard: FunctionComponent<IMovieCard> = ({ title, posterPath, id }) => {
  const { favouriteMovies } = useSelector((state: IState) => state.favourites)
  const isNotFavourite = favouriteMovies.find((movie: IFavouriteMovie) => movie.id === id) === undefined

  return (
    <div className='flex flex-col mb-16 mr-16 w-96 border-secondary-50 text-secondary-50'>
      <img
        src={`${IMAGE_BASE_URL}${posterPath}`}
        alt={title}
      />
      <div className='flex justify-between'>
        <p className='mt-2 text-3xl'>{title}</p>
        <div className='mt-2 cursor-pointer'>
          <HeartIcon disabled={isNotFavourite} />
        </div>
      </div>
    </div>
  )
}
