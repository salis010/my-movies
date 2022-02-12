import React, { FunctionComponent } from 'react'

export const Grid: FunctionComponent = ({ children }) => {
  const columnsStyling = 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'
  const xGapStyling = 'gap-x-8 sm:gap-x-12 xl:gap-x-16'
  const yGapStyling = 'gap-y-12'

  return (
    <div className={`grid ${columnsStyling} ${xGapStyling} ${yGapStyling}`}>
      {children}
    </div>
  )
}
