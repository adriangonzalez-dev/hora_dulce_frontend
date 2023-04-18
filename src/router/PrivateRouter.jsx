import {Routes, Route, Navigate} from 'react-router-dom'
import { AddProduct, Admin, EditProduct, ListProducts } from '../pages/admin'
import { AdminMenu } from '../components/AdminMenu'

export const PrivateRouter = () => {

  return (
    <div className='w-full'>
      <AdminMenu/>
      <Routes>
              <Route index element={<Admin/>} />
              <Route path='productos'>
                  <Route index element={<ListProducts/>} />
                  <Route path='agregar' element={<AddProduct/>} />
                  <Route path='editar/:id' element={<EditProduct/>} />
              </Route>
      </Routes>
    </div>
  )
}
