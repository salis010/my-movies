import React, { FunctionComponent, ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setGenre } from '../store/movies/thunks/setGenre'
import { IGenre } from '../store/movies/movies-slice'
import { IState } from '../store'

export const GenresDropdown: FunctionComponent = () => {
  const { genres, selectedGenre } = useSelector((state: IState) => state.movies)
  const dispatch = useDispatch()

  const changeHandler = (event: ChangeEvent<HTMLSelectElement>): void => {
    const genre = genres.find(g => g.id === parseInt(event.target.value))

    dispatch(setGenre(genre as IGenre))
  }

  return (
    <select
      onChange={changeHandler}
      value={selectedGenre === undefined ? 0 : selectedGenre.id}
    >
      {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
    </select>
  )
}
