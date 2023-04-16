import React from 'react'
import { Card } from './Card'

export const ProductsCards = () => {
  return (
    <section className='flex w-full flex-col items-center justify-center gap-2 p-2'>
            <form>
                <input type="text" />    
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
     </section>
  )
}
