import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks'

export const ProtectedRoute = ({children}) => {
  const {auth} =  useAuth()

  return auth.isLogged ? children : <Navigate to='/login' />
}
