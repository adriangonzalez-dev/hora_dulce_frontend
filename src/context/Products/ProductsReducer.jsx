export const initialState = {
    products: [],
    product: null,
    isLoading: false,
    error: null
}

export const productsReducer = (state, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_REQUEST':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_PRODUCTS_SUCCESS':
            return {
                ...state,
                products: action.payload,
                isLoading: false,
                error: null
            }
        case 'GET_PRODUCTS_FAILURE':
            return {
                ...state,
                products: [],
                isLoading: false,
                error: action.payload
            }
        case 'GET_PRODUCT_REQUEST':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_PRODUCT_SUCCESS':
            return {
                ...state,
                product: action.payload,
                isLoading: false,
                error: null
            }
        case 'GET_PRODUCT_FAILURE':
            return {
                ...state,
                product: null,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}
