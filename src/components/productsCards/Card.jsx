import React from 'react'
import prueba from '../../assets/images/imagen-prueba.jpg'

export const Card = () => {
  return (
      <div className="flex flex-col rounded items-center justify-center gap-2 w-36 sm:w-60 shadow-lg">
          <figure className='w-full rounded-t'>
            <img src={prueba} alt="Shoes" loading='lazy' className='object-cover rounded-t'/>
          </figure>
          <div className="w-full flex flex-col items-center justify-center p-1">
              <div className='text-gray-700 w-full text-start'>
                <p className='font-semibold text-md'>$99,99</p>
                <h2 className=' text-sm'>Shoes!</h2>
              </div>
              <div className="mt-1">
                <button 
                className='flex items-center justify-center text-primary-100
                gap-2 p-2 rounded duration-200 hover:bg-primary-150 hover:text-gray-600'>
                  <span >Encargar</span> <i className="fa-brands fa-whatsapp text-social-300"></i>
                </button>
              </div>
          </div>
      </div>
  )
}
