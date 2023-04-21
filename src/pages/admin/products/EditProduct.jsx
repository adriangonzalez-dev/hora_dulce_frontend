import { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form'
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { apiFiles, apiProducts } from '../../../config/axios';
import { Waveform } from '@uiball/loaders';
import { ErrorMessage } from '../../../components';
import { Link } from 'react-router-dom';
import { useProducts } from '../../../hooks';

export const EditProduct = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const {register, handleSubmit, formState: {errors},reset} = useForm();
  const {productsDispatch} = useProducts();

  const onSubmit = async (data) => {
    try {
      setIsFetching(true);
      let responseImage = null;
      
      if(data.image !== product.image) {

        await apiFiles.delete(`/product/${product.image.split('/')[8].split('.')[0]}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })

        const formData = new FormData(); 
        formData.append('image', data.image[0]);

        responseImage = await apiFiles.post('/product', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
      }

      const responseProduct = await apiProducts.patch(`/${product._id}`, {
        title: data.title,
        description: data.description,
        outstanding: data.outstanding,
        price: Number(data.price),
        image: responseImage ? responseImage.data : product.image
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      productsDispatch({type: 'UPDATE_PRODUCT', payload: responseProduct.data})

      toast.success('Producto actualizado con éxito!')

      reset(responseProduct.data);

      setProduct(responseProduct.data);


      
    } catch (error) {
      console.log(error)
      if(error.response.status === 400){
        toast.error(error.response.data.message)
        return;
      }

      toast.error('Hable con el administrador!')
    } finally {
      setIsFetching(false);
    }
  }

  const getProduct = async () => {
    try {
      setIsFetching(true);
      const response = await apiProducts.get(`/${id}`);
      setProduct(response.data);
      reset(response.data);
    } catch (error) {
      console.log(error)
      toast.error('Hable con el administrador!')
    } finally {
      setIsFetching(false);
    }
  }

  useEffect(() => {
    getProduct();
  }, [id, reset])

  return (

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            {product ? product.title : <Waveform/>}
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
                {...register('outstanding')}
                />
              </label>
            </div>

            <div className='flex items-center justify-center'>
              {
                product ? (
                  <img src={product.image} alt={product.title} className='w-32 h-32 object-cover'/>
                  )
                  : <Waveform color="#000" size={20}/>
              }
            </div>
  
            <div>
              <input 
              type="file" 
              className="file-input file-input-bordered file-input-info w-full max-w-xs" 
              {...register('image')}
              />
            {
              errors.image && <ErrorMessage message={errors.image.message}/>
            }
            </div>
              <button
                type="submit"
                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                disabled={isFetching}
              >
                <span className='w-full flex items-center justify-center'>
                  {isFetching ? <Waveform color="#fff" size={20}/> : 'Editar Producto'}
    
                </span>
              </button>
              <Link
                to="/admin/productos"
                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white text-center"
                disabled={isFetching}
              >
                Volver atrás
              </Link>
  
          </form>
        </div>
      </div>
  
    )
  }
