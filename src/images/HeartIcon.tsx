import React, { FunctionComponent } from 'react'

interface IHeartIcon {
  disabled: boolean
}

export const HeartIcon: FunctionComponent<IHeartIcon> = ({ disabled = true }) =>
  <svg width='24px' height='24px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
    <path
      fill={disabled ? 'rgb(25, 25, 25)' : 'rgb(255, 255, 255)'}
      d='M22 9.07503C22 10.7199 21.2857 12.1591 20.1633 13.2899L12.5102 20.7944C12.3061 20.8972 12.2041 21 12 21C11.7959 21 11.5918 20.8972 11.4898 20.7944L3.83673 13.1871C2.71429 12.0563 2 10.5142 2 8.86943C2 7.3274 2.71429 5.88818 3.83673 4.75737C5.06122 3.62655 6.59184 2.90694 8.22449 3.00974C9.55102 3.00974 10.7755 3.52375 11.7959 4.34616C14.2449 2.39293 17.7143 2.59853 19.9592 4.86017C21.2857 5.88818 22 7.4302 22 9.07503Z'
    />
  </svg>
