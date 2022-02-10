import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { MenuItem } from './MenuItem'
import { setCurrentPage } from '../../store/ui/ui-slice'

export const Menu: FunctionComponent = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCurrentPage(window.location.pathname))
  })

  return (
    <nav className='flex mb-12'>
      <MenuItem text='Home' to='/' />
      <MenuItem text='Favourites' to='/favourites' />
    </nav>
  )
}
