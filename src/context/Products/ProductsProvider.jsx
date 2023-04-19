import { useReducer } from "react"
import { ProductsContext } from "./ProductsContext"
import { productsReducer,initialState } from "./ProductsReducer"

export const ProductsProvider = ({children}) => {

    const [products, productsDispatch] = useReducer(productsReducer, initialState)

      return (
        <ProductsContext.Provider value={{products, productsDispatch}}>
            {children}
        </ProductsContext.Provider>
      )

    }


