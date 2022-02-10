import React, { FunctionComponent } from 'react'
import { GenresDropdown } from '../GenresDropdown'
import { Search } from '../search'
import { MoviesGrid } from '../MoviesGrid'

export const Home: FunctionComponent = () =>
  <>
    <div className='flex justify-between w-full px-16'>
      <GenresDropdown />
      <Search />
    </div>
    <MoviesGrid />
  </>
