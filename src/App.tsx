import React, { FunctionComponent, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Menu } from './components/menu'
import { Home } from './components/pages/Home'
import { Favourites } from './components/pages/Favourites'
import { useDispatch } from 'react-redux'
import { fetchGenres } from './store/movies/thunks/fetchGenres'
import { fetchFavourites } from './store/favourites/thunks/fetchFavourites'

export const App: FunctionComponent = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGenres())
    dispatch(fetchFavourites())
  })

  return (
    <Router>
      <div className='flex flex-col items-center mx-4 sm:mx-8'>
        <h1 className='my-12 font-bold text-7xl text-primary-200'>My Movies</h1>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </div>
    </Router>
  )
}
