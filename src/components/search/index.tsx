import React, { FunctionComponent } from 'react'
import { SearchIcon } from './SearchIcon'

export const Search: FunctionComponent = () => {
  return (
    <div className='flex items-center justify-between px-4 border w-96 border-secondary-50'>
      <input className='text-3xl w-72 border-primary-400 outline-0 bg-secondary-900 text-secondary-50' />
      <SearchIcon />
    </div>
  )
}
