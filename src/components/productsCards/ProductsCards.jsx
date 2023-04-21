import { Card } from './Card'
import { useProducts } from '../../hooks'
import { useState } from 'react'
import { Loaders } from '../Loaders'

export const ProductsCards = () => {
  const [totalProducts, getTotalProducts] = useState(4)
  const [resultsSearch, setResultsSearch] = useState([])
  const {products} = useProducts()

  const getMoreProducts = () => {
    if(totalProducts < products.data.length) getTotalProducts(totalProducts + 4)
    else getTotalProducts(products.data.length)
  }

  const searchProducts = (value) => {
    const results = products.data.filter((product) => {
      return product.title.toLowerCase().includes(value.toLowerCase())
    })
    setResultsSearch(results)
  }

  return (
        <section 
        className='flex w-full flex-col items-center justify-center gap-2 p-2'>
            <form>         
              <input 
              type="text" 
              placeholder="Buscar Productos" 
              className="input bg-white border-1 border-gray-400 w-full 
              max-w-xs text-gray-600" 
              onChange={(e)=>searchProducts(e.target.value)}
              />
            </form>
              {
                resultsSearch.length > 0 ? 

                products.isLoading ? <Loaders/> :
                <article className='w-full flex gap-2 flex-wrap items-center justify-center'>
                  {
                      resultsSearch.map((product) => {
                      return <Card key={product._id} product={product} />
                    })
                  }
                </article>
                :

                products.isLoading ? <Loaders/> :
                  <article className='w-full flex gap-2 flex-wrap items-center justify-center'>
                    {
                      products.data.slice(0,totalProducts).map((product) => {
                        return <Card key={product._id} product={product} />
                      })
                    }
                </article>
              }
  
            {
              (totalProducts < products.data.length || resultsSearch > 0) && 
              <div className='mt-4'>
                <button 
                className="w-fit inline-block rounded border border-primary-100 bg-primary-100 px-6 py-2 md:px-12 md:py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary-100 focus:outline-none focus:ring active:text-primary-100"
                onClick={()=>getMoreProducts()}>
                  Más Productos
                </button>
            </div>
            }
     </section>

  )
}
