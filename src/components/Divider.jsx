import React from 'react'

export const Divider = ({text, href}) => {
  return (
    <div 
    className="divider text-gray-600 font-bold"
    id={href}>
      {text}
    </div>
  )
}
