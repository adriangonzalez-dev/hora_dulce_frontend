import React from 'react'
import { Card } from './Card';

const methods= [
  {
    title: '1er Paso',
    description: 'Elige el producto de acuerdo a tus gustos.',
    icon: 'checklist'
  },
  {
    title: '2do Paso',
    description: 'Contactanos a través de whatsapp para hacer tu pedido.',
    icon: 'package'
  },
  {
    title: '3er Paso',
    description: 'Coordina el medio de pago y la entrega del pastel.',
    icon: 'credit_card'
  },
]

export const Methods = () => {
  return (
    <section className='w-full flex flex-col md:flex-row p-4 gap-2'>
        {
          methods.map((method, index) => (
            <Card key={index} title={method.title} description={method.description} icon={method.icon}/>
          ))
        }

    </section>
  )
}
