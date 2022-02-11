import React, { FunctionComponent, useEffect } from 'react'

export const Favourites: FunctionComponent = () => {
  useEffect(() => {
    const movie = {
      id: 634649,
      title: 'Spider-Man: No Way Home',
      posterPath: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg'
    }

    fetch('/favourite-movies/save-favourite-movie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    })
      .then(async res => await res.json())
      .then(result => console.log(result))
      .catch(err => console.log('Hey:', err))
  }, [])

  return (
    <div className='flex justify-between w-full px-16 text-secondary-50'>
      Favourites
    </div>
  )
}
