
import { AuthContext } from './AuthContext'
import { useReducer } from 'react'
import {initialState, authReducer} from './AuthReducer'
import { useEffect } from 'react';

export const AuthProvider = ({children}) => {
  const [auth, authDispatch] = useReducer(authReducer, initialState);

  const relogged = () => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (token && user) {
      authDispatch({type: 'LOGIN', payload: user})
    }
  }

  useEffect(() => {
    relogged();
  }, [])

  return (
    <AuthContext.Provider value={{auth, authDispatch}}>
        {children}
    </AuthContext.Provider>
  )
}
