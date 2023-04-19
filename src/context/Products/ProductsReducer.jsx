import dbProducts from '../../assets/db/productos.json'

export const initialState = {
    data: dbProducts,
    product: null,
    isLoading: true,
    error: null
}

export const productsReducer = (state, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}
