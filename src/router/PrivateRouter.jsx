import {Routes, Route, Navigate} from 'react-router-dom'
import { AddProduct, Admin, EditProduct, ListProducts } from '../pages/admin'
import { ErrorPage } from '../pages/ErrorPage'

export const PrivateRouter = () => {
  return (
    <div className='w-full flex flex-col justify-between'>
      <Routes>
              <Route index element={<Admin/>} />
              <Route path='productos'>
                  <Route index element={<ListProducts/>} />
                  <Route path='agregar' element={<AddProduct/>} />
                  <Route path='editar/:id' element={<EditProduct/>} />
              </Route>
              <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </div>
  )
}
