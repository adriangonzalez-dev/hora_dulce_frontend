import React, { useState } from 'react';
import {Link} from 'react-router-dom';
const links = [
    {
        name: 'INICIO',
        href: '#inicio',
    },
    {
        name: 'DESTACADOS',
        href: '#destacados',
    },
    {
        name: 'PRODUCTOS',
        href: '#productos',
    },
    {
        name: 'CONTACTO',
        href: '#contacto',
    },
    {
        name: 'INICIAR SESIÓN',
        href: 'login',
    }
]

export default function Navbar() {

  const [menu, setMenu] = useState(false);

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
                        {
                                links.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            className="text-gray-500 hover:text-primary-100"
                                            to={link.href}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))
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
