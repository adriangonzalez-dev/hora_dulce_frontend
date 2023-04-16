import { useContext } from "react";
import { ProductsContext } from "../context/Products/ProductsContext";

export const useProducts = () => {
  return useContext(ProductsContext)
}
