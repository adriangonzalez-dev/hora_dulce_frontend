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
            <div className={`${classMenuNav} md:static md:p-0 md:w-auto md:block duration-200 z-10`}>
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
                            auth.user && <li className="dropdown text-gray-500">
                                <label tabIndex={0} className="btn m-1">ADMIN</label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li onClick={toggleMenu}><Link to='admin/productos'>Productos</Link></li>
                                    <li onClick={toggleMenu}><Link>Cerrar sesión</Link></li>
                                </ul>
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
