export const initialState = {
    user: null,
    isLogged: false,
    isLoading: false,
    error: null
}

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                isLoading: true
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload,
                isLogged: true,
                isLoading: false,
                error: null
            }
        case 'LOGIN_FAILURE':
            return {
                ...state,
                user: null,
                isLogged: false,
                isLoading: false,
                error: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                isLogged: false,
                isLoading: false,
                error: null
            }
        default:
            return state
    }
}