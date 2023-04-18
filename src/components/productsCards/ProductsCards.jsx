import React from 'react'
import { Card } from './Card'
import { ButtonLink } from '../ButtonLink'

export const ProductsCards = () => {
  return (
    <section 
    className='flex w-full flex-col items-center justify-center gap-2 p-2'>
            <form>         
              <input 
              type="text" 
              placeholder="Buscar Productos" className="input bg-white border-1 border-gray-400 w-full max-w-xs text-gray-600" />
            </form>
            <article className='w-full flex gap-2 flex-wrap items-center justify-center'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </article>
            <div>
              <ButtonLink content='Más Productos'/>
            </div>
     </section>
  )
}
