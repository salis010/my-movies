import React, { FunctionComponent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCurrentPage } from '../../store/ui/ui-slice'
import { IState } from '../../store'

interface IMenuItem {
  text: string
  to: string
}

export const MenuItem: FunctionComponent<IMenuItem> = ({ text, to }) => {
  const { currentPage } = useSelector((state: IState) => state.ui)
  const dispatch = useDispatch()

  const clickHandler = (): void => {
    dispatch(setCurrentPage(to))
  }

  return (
    <Link to={to}>
      <div className='flex flex-col'>
        <div
          className='mx-6 text-3xl cursor-pointer text-secondary-100'
          onClick={clickHandler}
        >
          {text}
        </div>
        {currentPage === to && <div className='w-full h-1 bg-secondary-100' />}
      </div>
    </Link>
  )
}
