import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FavouritesGrid } from '../FavouritesGrid'
import { fetchFavourites } from '../../store/favourites/thunks/fetchFavourites'

export const Favourites: FunctionComponent = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFavourites())
  })

  return (
    <div className='flex justify-between w-full px-16 text-secondary-50'>
      <FavouritesGrid />
    </div>
  )
}
