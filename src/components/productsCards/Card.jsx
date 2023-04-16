import React from 'react'
import prueba from '../../assets/images/imagen-prueba.jpg'
import { ButtonLink } from '../ButtonLink'

export const Card = () => {
  return (
      <div className="flex flex-col items-center justify-center gap-4 w-full sm:w-52 bg-gradient-to-t from-primary-200 p-4 shadow-lg">
          <figure className='w-24 rounded-full ring ring-primary-100 ring-offset-2'>
            <img src={prueba} alt="Shoes" loading='lazy' className='rounded-full'/>
          </figure>
          <div className="w-full flex flex-col items-center justify-center">
              <div className='text-gray-700 text-center'>
                <h2 className='font-bold text-2xl'>Shoes!</h2>
                <p className='font-semibold text-xl'>$99,99</p>
              </div>
              <div className="mt-4">
                <ButtonLink content={
                    <>
                        <span>Encargar</span> <i className="fa-brands fa-whatsapp text-social-300"></i>
                    </>
                }/>
              </div>
          </div>
      </div>
  )
}
