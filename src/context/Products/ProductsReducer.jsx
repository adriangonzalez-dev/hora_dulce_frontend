
export const initialState = {
    data: [],
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
        case 'ADD_PRODUCT':
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case 'UPDATE_PRODUCT':
            return {
                ...state,
                data: state.data.map(product => product._id === action.payload._id ? action.payload : product)
            }
        case 'DELETE_PRODUCT':
            return {
                ...state,
                data: state.data.filter(product => product._id !== action.payload)
            }
        default:
            return state
    }
}
