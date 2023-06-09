import {useForm} from 'react-hook-form';
import { ErrorMessage } from '../../components';
import { apiAuth } from '../../config/axios';
import { useState, useEffect } from 'react';
import { Waveform } from '@uiball/loaders'
import { toast } from 'sonner';
import { useAuth } from '../../hooks';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const[isFetching, setIsFetching] = useState(false);
  const {auth, authDispatch} = useAuth();
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    setIsFetching(true);
    try {
      const response = await apiAuth.post('/login', data);

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      authDispatch({type: 'LOGIN', payload: response.data.user})

      toast.success('Bienvenido!')

      navigate('/',{replace: true})
    } catch (error) {
      if(error.response.data.statusCode === 401 ){
        toast.error(error.response.data.message);
        return;
      }
      toast.error('Hable con el administrador!');
    } finally {
      setIsFetching(false);
    }
  }

  useEffect(() => {
    if(auth.isLogged){
      navigate('/',{replace: true})
    }
  }, [auth.isLogged])


  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-primary-100 sm:text-3xl">
          Iniciar Sesión
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Acceso solo para administradores
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium text-gray-600">Ingresa tus credenciales</p>

          <div>
            <label htmlFor="email" className="sr-only">Email</label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-white text-black"
                placeholder="Email"
                {...register('email', {
                  required: {
                    value: true,
                    message: 'El email es requerido'
                  },
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'El email no es válido'
                  }
                })}
              />
            </div>
              {
                errors.email && <ErrorMessage message={errors.email.message}/>

              }
          </div>

          <div>
            <label htmlFor="password" className="sr-only">Password</label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-white text-black"
                placeholder="Password"
                {...register('password', {
                  required: {
                    value: true,
                    message: 'El password es requerido'
                  },
                  minLength: {
                    value: 6,
                    message: 'El password debe tener al menos 6 caracteres'
                  }
                })}
              />
            </div>
            {
                errors.password && <ErrorMessage message={errors.password.message}/>

            }
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            disabled={isFetching}
          >
            <span>
              {isFetching ? <Waveform color="#fff" size={20}/> : 'Iniciar Sesión'}
            </span>
            {
              !isFetching && 
              <span className="material-symbols-outlined">
                lock
              </span>
            }
          </button>

        </form>
      </div>
    </div>

    </>

  )
}
