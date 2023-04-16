
import { AuthContext } from './AuthContext'
import { useReducer } from 'react'
import {initialState, authReducer} from './AuthReducer'

export const AuthProvider = ({children}) => {
  const [auth, authDispatch] = useReducer(authReducer, initialState)
  return (
    <AuthContext.Provider value={{auth, authDispatch}}>
        {children}
    </AuthContext.Provider>
  )
}
