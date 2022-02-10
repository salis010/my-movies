import React, { FunctionComponent, ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SearchIcon } from './SearchIcon'
import { setSearchTerm } from '../../store/movies/movies-slice'
import { IState } from '../../store'

export const Search: FunctionComponent = () => {
  const { searchTerm } = useSelector((state: IState) => state.movies)
  const dispatch = useDispatch()

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchTerm(event.target.value))
  }

  return (
    <div className='flex items-center justify-between px-4 border w-96 border-secondary-50'>
      <input
        className='text-3xl w-72 border-primary-400 outline-0 bg-secondary-900 text-secondary-50'
        value={searchTerm}
        onChange={changeHandler}
      />
      <SearchIcon />
    </div>
  )
}
