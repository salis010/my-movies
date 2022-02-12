import React, { FunctionComponent } from 'react'
import { GenresDropdown } from '../GenresDropdown'
import { Search } from '../Search'
import { Movies } from '../Movies'

export const Home: FunctionComponent = () =>
  <>
    <div className='flex justify-between w-full px-16'>
      <GenresDropdown />
      <Search />
    </div>
    <Movies />
  </>
