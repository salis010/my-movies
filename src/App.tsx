import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GenresDropdown } from './components/GenresDropdown'
import { Search } from './components/search'
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
      <div className='flex justify-between w-full px-16'>
        <GenresDropdown />
        <Search />
      </div>
      <MoviesGrid />
    </div>
  )
}
