import {useForm} from 'react-hook-form';
import { ErrorMessage } from '../../../components/ErrorMessage';

export const AddProduct = () => {

  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (

    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Nuevo Producto
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-semibold text-gray-600" >Rellena todos los campos</p>

          <div className='w-full'>
            <input 
            type="text" 
            placeholder="Nombre del Producto" 
            className="input w-full max-w-xs bg-white placeholder:text-gray-400 text-gray-600" 
            {...register('title', {
              required: {
                value: true,
                message: 'El nombre del producto es requerido'
              },
              minLength: {
                value: 3,
                message: 'El nombre del producto debe tener al menos 3 caracteres'
              }
            })}
            />
            {
              errors.title && <ErrorMessage message={errors.title.message}/>
            }
          </div>

          <div className='w-full'>
            <textarea 
            className="textarea bg-white placeholder:text-gray-400 text-gray-600 w-full" 
            placeholder="Descripción"
            {...register('description', {
              required: {
                value: true,
                message: 'La descripción es requerida'
              },
              minLength: {
                value: 10,
                message: 'La descripción debe tener al menos 10 caracteres'
              }
            })
            }
            ></textarea>
            {
              errors.description && <ErrorMessage message={errors.description.message}/>
            }
          </div>

          <div className='w-full'>
            <input 
            type="number" 
            placeholder="Precio" 
            className="input w-full max-w-xs bg-white placeholder:text-gray-400 text-gray-600"
            {...register('price', {
              required: {
                value: true,
                message: 'El precio es requerido'
              },
              min: {
                value: 1,
                message: 'El precio debe ser mayor a 1'
              },
              pattern: {
                value: /^\d+$/,
                message: 'El precio debe ser un número'
              }
            })}
            />
            {
              errors.price && <ErrorMessage message={errors.price.message}/>
            }
          
          </div>

          <div className="form-control w-full">
            <label className="cursor-pointer label flex items-center justify-around">
              <span className="label-text">Producto Destacado</span> 
              <input 
              type="checkbox" 
              className="toggle toggle-accent" 
              {...register('featured')}
              />
            </label>
          </div>

          <div>
            <input 
            type="file" 
            className="file-input file-input-bordered file-input-info w-full max-w-xs" 
            {...register('image',{
              required: {
                value: true,
                message: 'La imagen es requerida'
              }
            })}
            />
          {
            errors.image && <ErrorMessage message={errors.image.message}/>
          }
          </div>
          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Agregar Producto
          </button>

        </form>
      </div>
    </div>

  )
}
