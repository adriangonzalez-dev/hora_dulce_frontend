import React from 'react'

export const Divider = ({text}) => {
  return (
      <div className='flex w-full items-center h-10 justify-center sm:gap-1'>
        <span className='h-1 w-1/6 sm:w-3/12  bg-primary-100 rounded '></span>
        <span 
        className='h-1 w-3/6 sm:w-2/12 text-center text-primary-100 
        flex items-center justify-center text-sm md:text-md font-bold'>
            {text}
        </span>
        <span className='h-1 w-1/6 sm:w-3/12 bg-primary-100 rounded px-1'></span>
      </div>
  )
}
