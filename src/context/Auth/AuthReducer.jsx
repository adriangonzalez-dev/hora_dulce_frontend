export const initialState = {
    user: null,
    isLogged: false,
    error: null
}

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                isLogged: true,
            }
        case 'LOGIN_FAILURE':
            return {
                ...state,
                user: null,
                isLogged: false,
                error: action.payload
            }
        case 'LOGOUT':
            return initialState;
        default:
            return state
    }
}