import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
export const Root = () => {
  return (
    <>
        <Header/>
        <main className='flex flex-col w-full items-center justify-center'>
          <Outlet />
        </main>
    </>
  )
}
