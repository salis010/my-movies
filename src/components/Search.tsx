import React, { FunctionComponent, ChangeEvent, FormEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SearchIcon } from './search/SearchIcon'
import { setSearchTerm } from '../store/movies/movies-slice'
import { searchMovies } from '../store/movies/thunks/searchMovies'
import { IState } from '../store'

export const Search: FunctionComponent = () => {
  const { searchTerm } = useSelector((state: IState) => state.movies)
  const dispatch = useDispatch()

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchTerm(event.target.value))
  }

  const searchSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    dispatch(searchMovies(searchTerm))
  }

  const clickHandler = (): void => {
    dispatch(searchMovies(searchTerm))
  }

  return (
    <div className='flex items-center justify-between px-4 border w-96 border-secondary-50'>
      <form onSubmit={searchSubmitHandler}>
        <input
          className='text-3xl w-72 border-primary-400 outline-0 bg-secondary-900 text-secondary-50'
          value={searchTerm}
          onChange={changeHandler}
        />
      </form>
      <div
        className='cursor-pointer'
        onClick={clickHandler}
      >
        <SearchIcon />
      </div>
    </div>
  )
}
