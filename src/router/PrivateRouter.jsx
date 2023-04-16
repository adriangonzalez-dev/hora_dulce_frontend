import {Routes, Route, Navigate} from 'react-router-dom'
import { AddProduct, Admin, EditProduct, ListProducts } from '../pages/admin'

export const PrivateRouter = () => {

  return (
    <Routes>
            <Route index element={<Admin/>} />
            <Route path='productos'>
                <Route index element={<ListProducts/>} />
                <Route path='agregar' element={<AddProduct/>} />
                <Route path='editar/:id' element={<EditProduct/>} />
            </Route>
    </Routes>
  )
}
