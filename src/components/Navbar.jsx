import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useAuth } from '../hooks';
const links = [
    {
        name: 'DESTACADOS',
        href: '/#destacados',
    },
    {
        name: 'PRODUCTOS',
        href: '/#productos',
    },
]

export default function Navbar() {

  const [menu, setMenu] = useState(false);
  const {auth} = useAuth();

  const toggleMenu = () => {
        setMenu(!menu);
    }

    const classMenuNav = menu ? 'absolute top-14 right-0 bg-white p-4 w-full' : 'hidden'

  return (
      <>
            <div className={`${classMenuNav} md:static md:p-0 md:w-auto md:block duration-200`}>
                <nav aria-label="Site Nav">
                    <ul className={`${menu && 'flex-col'} flex md:flex-row items-center gap-6 text-sm`}
                    >
                        <li onClick={toggleMenu}>
                            <Link
                                className="text-gray-500 hover:text-primary-100"
                                to='/'
                            >
                                INICIO
                            </Link>
                        </li>
                        {
                                links.map((link, index) => (
                                    <li key={index} onClick={toggleMenu}>
                                        <a
                                            className="text-gray-500 hover:text-primary-100"
                                            href={link.href}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))
                        }
                        <li onClick={toggleMenu}>
                            <Link
                                className="text-gray-500 hover:text-primary-100"
                                to='login'
                            >
                                INICIAR SESIÓN
                            </Link>
                        </li>
                        {
                            auth.user && <li onClick={toggleMenu}>
                            <Link
                                className="text-gray-500 hover:text-primary-100"
                                to='admin'
                            >
                                ADMIN
                            </Link>
                        </li>
                        }
                    </ul>
                </nav>
            </div>

          <div className="flex items-center gap-4">

              <div className="block md:hidden">
                  <button
                      className="flex rounded bg-none p-2 border-primary-400 border-2"
                        onClick={toggleMenu}
                  >
                      <span className="material-symbols-outlined text-primary-100">
                          menu
                      </span>
                  </button>
              </div>
          </div>
      </>
  )
}
