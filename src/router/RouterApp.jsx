import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import { Home, Login } from '../pages'
import { Root } from '../layout/Root'
import { PrivateRouter } from './PrivateRouter'
import { ProtectedRoute } from './ProtectedRoute'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Root/>}>
        <Route index element={<Home/>} />
        <Route path='login' element={<Login/>} />
        <Route path='admin/*' element={
          <ProtectedRoute>
            <PrivateRouter/>
          </ProtectedRoute>
        }>
        </Route>
      </Route>

    </>
  )
)


