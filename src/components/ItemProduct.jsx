import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import Swal from 'sweetalert2'
import { apiProducts } from '../config/axios'
import { useProducts } from '../hooks'

export const ItemProduct = ({product, item}) => {
  const {productsDispatch} = useProducts()
  const deleteItem = (id) => {
    Swal.fire({
      title: 'Eliminar producto?',
      text: "No podrás revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then(async (result) => {
      if (result.isConfirmed) {

        await apiProducts.delete(`/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        productsDispatch({type: 'DELETE_PRODUCT', payload: id})
        Swal.fire(
          'Eliminado!',
          'El Producto fue eliminado!',
          'success'
        )
      }
    })
  }

  return (
    <tr>
        <th>{item+1}</th> 
        <td>{product.title}</td> 
        <td>{product.price}</td> 
        <td>{
            product.outstanding ? 'Si' : 'No'
        }</td> 
        <td className='flex justify-center'>
              <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
                  <Link
                    to={`/admin/productos/editar/${product._id}`}
                    className="inline-block border-e p-2 text-gray-700 hover:bg-gray-50 focus:relative"
                    title="Edit Product"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </Link>

                  <button
                    className="inline-block p-2 text-gray-700 hover:bg-gray-50 focus:relative"
                    title="Delete Product"
                    onClick={() => deleteItem(product._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
              </span>
        </td> 
      </tr>
  )
}
