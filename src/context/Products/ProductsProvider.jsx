import { useReducer } from "react"
import { ProductsContext } from "./ProductsContext"
import { productsReducer,initialState } from "./ProductsReducer"
import { useEffect } from "react";
import { apiProducts } from "../../config/axios";

export const ProductsProvider = ({children}) => {

    const [products, productsDispatch] = useReducer(productsReducer, initialState);

      const getProducts = async () => {
        const response = await apiProducts.get('/');
        productsDispatch({type: 'GET_PRODUCTS', payload: response.data})
      }

      useEffect(() => {
        getProducts();
      }, [])

      return (
        <ProductsContext.Provider value={{products, productsDispatch}}>
            {children}
        </ProductsContext.Provider>
      )

    }


