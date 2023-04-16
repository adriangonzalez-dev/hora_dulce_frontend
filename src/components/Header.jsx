import React from 'react'
import logo from '../assets/logo.png'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
      <header aria-label="Site Header" className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between relative">
                  <div className="md:flex md:items-center md:gap-12">
                      <Link 
                      className="flex items-center justify-center text-teal-600 w-12 h-12" 
                      to="/">
                          <img src={logo} alt="logo" loading='lazy' className='w-10 h-auto'/>
                      </Link>
                  </div>

                  <Navbar/>
              </div>
          </div>
      </header>

  )
}
