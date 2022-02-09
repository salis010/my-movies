import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchGenres } from './store/movies/thunks/fetchGenres'

export const App: FunctionComponent = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGenres())
  })

  return (
    <h1 className='font-bold text-5xl text-red-300 ml-[-10px]'>Hello world!</h1>
  )
}
