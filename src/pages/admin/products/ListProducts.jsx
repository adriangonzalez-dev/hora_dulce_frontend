import React from 'react'
import { ItemProduct } from '../../../components/ItemProduct'
import { useProducts } from '../../../hooks'
import { Link } from 'react-router-dom'

export const ListProducts = () => {
  const {products} = useProducts()
  
  return (
    <div className='w-full text-center text-gray-600'>
      <h1>Lista de productos</h1>
      <div className='w-full md:w-3/5 md:m-auto flex flex-col-reverse md:flex-row items-center justify-around px-2 py-2 gap-2'>
      <div className="relative flex w-full flex-wrap items-stretch">
    <input
      type="search"
      className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon2" />

    <span
      className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 "
      id="basic-addon2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clipRule="evenodd" />
      </svg>
    </span>
  </div>
        <Link
          to='/admin/productos/agregar'
          className="inline-block w-full md:w-40 rounded bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]">
          Agregar Producto
        </Link>
      </div>

      <div className="overflow-x-auto w-screen md:w-3/5 m-auto text-gray-300">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Producto</th> 
        <th>Precio</th> 
        <th>Destacado</th> 
        <th>Editar</th> 
      </tr>
    </thead> 
    <tbody>
      {
        products.data.map((product, index) => {
          return <ItemProduct key={product._id} product={product} item={index}/>
        })
      }
      
    </tbody> 
    <tfoot>
      <tr>
        <th></th> 
        <th>Producto</th> 
        <th>Precio</th> 
        <th>Destacado</th> 
        <th>Editar</th>
      </tr>
    </tfoot>
  </table>
</div>
    </div>

  )
}
