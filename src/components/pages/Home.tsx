import React, { FunctionComponent } from 'react'
import { GenresDropdown } from '../GenresDropdown'
import { Search } from '../Search'
import { Movies } from '../Movies'

export const Home: FunctionComponent = () =>
  <>
    <div className='flex flex-col justify-between w-full mb-16 sm:flex-row'>
      <GenresDropdown />
      <Search />
    </div>
    <Movies />
  </>
