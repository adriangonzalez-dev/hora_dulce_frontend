import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks'
import { useEffect } from 'react'

export const ProtectedRoute = ({children}) => {
  const {auth} =  useAuth()

  return auth.user ? children : <Navigate to='/login' />
}
