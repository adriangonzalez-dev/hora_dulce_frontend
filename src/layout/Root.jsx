import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'
import { Toaster } from 'sonner'

export const Root = () => {
  return (
    <>
        <Header/>
          <main className='flex flex-col w-full h-full items-center justify-center'>
            <Outlet />
          </main>
        <Toaster richColors position="bottom-center"/>
    </>
  )
}
