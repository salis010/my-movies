import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GenresDropdown } from './components/GenresDropdown'
import { fetchGenres } from './store/movies/thunks/fetchGenres'

export const App: FunctionComponent = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGenres())
  })

  return (
    <div className='flex flex-col'>
      <h1 className='ml-8 text-5xl font-bold text-red-300'>My Movies</h1>
      <GenresDropdown />
    </div>
  )
}
