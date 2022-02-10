import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GenresDropdown } from './components/GenresDropdown'
import { MoviesGrid } from './components/MoviesGrid'
import { fetchGenres } from './store/movies/thunks/fetchGenres'

export const App: FunctionComponent = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGenres())
  })

  return (
    <div className='flex flex-col mx-4 sm:mx-8'>
      <h1 className='m-16 font-bold text-7xl text-primary-200'>My Movies</h1>
      <GenresDropdown />
      <MoviesGrid />
    </div>
  )
}
