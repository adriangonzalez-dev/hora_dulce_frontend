import React from 'react'
import prueba from '../../assets/images/imagen-prueba.jpg'

export const CardFeatured = () => {
  return (
<div className="avatar py-2">
  <div className="w-24 rounded-full ring ring-primary-100 ring-offset-2">
    <img src={prueba} />
  </div>
</div>
  )
}
