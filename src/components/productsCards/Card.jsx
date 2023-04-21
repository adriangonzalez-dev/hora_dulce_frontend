import React from 'react'

export const Card = ({product}) => {
  return (
      <div className="flex flex-col rounded items-center 
      justify-center gap-2 w-36 sm:w-60 shadow-lg">
          <figure className='w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-t'>
            <img src={product.image} alt="Shoes" 
            loading='lazy' 
            className='w-full h-full object-cover rounded-t'/>
          </figure>
          <div className="w-full flex flex-col items-center justify-center p-1">
              <div className='text-gray-700 w-full text-start'>
                <p className='font-semibold text-md'>${product.price}</p>
                <h2 className='text-sm truncate'>{product.title}!</h2>
              </div>
              <div className="mt-1">
                <a href={`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}?text=Hola, quiero consultar por el producto: ${product.title}`} 
                target='_blank' rel='noreferrer'
                className='flex items-center justify-center text-primary-100
                gap-2 p-2 rounded duration-200 hover:bg-primary-150 hover:text-gray-600'>
                  <span >Encargar</span> <i className="fa-brands fa-whatsapp text-social-300"></i>
                </a>
              </div>
          </div>
      </div>
  )
}
