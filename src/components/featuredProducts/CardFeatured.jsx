import React from 'react'

export const CardFeatured = ({image}) => {

  return (
<div className="avatar py-2">
  <div className="w-24 rounded-full ring ring-primary-100 ring-offset-2">
    <img src={image} loading='lazy' alt='prueba'/>
  </div>
</div>
  )
}
