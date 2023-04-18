import React from 'react'

export const Login = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-primary-100 sm:text-3xl">
          Iniciar Sesión
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Acceso solo para administradores
        </p>

        <form
          action=""
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium text-gray-600">Ingresa tus credenciales</p>

          <div>
            <label htmlFor="email" className="sr-only">Email</label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-white text-black"
                placeholder="Email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">Password</label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-white text-black"
                placeholder="Password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            <span>
              Acceder
            </span>
            <span className="material-symbols-outlined">
              lock
            </span>
          </button>

        </form>
      </div>
    </div>

  )
}
