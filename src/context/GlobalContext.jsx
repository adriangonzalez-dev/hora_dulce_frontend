import React from 'react'
import { AuthProvider } from './Auth/AuthProvider'
import { ProductsProvider } from './Products/ProductsProvider'

export const GlobalContext = ({children}) => {
  return (
    <AuthProvider>
        <ProductsProvider>
            {children}
        </ProductsProvider>
    </AuthProvider>
  )
}
