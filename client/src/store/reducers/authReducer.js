import * as actionTypes from "../actions/actionTypes";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    user: null,
    error: null,
}

export default (state=initialState, action) => {
    switch(action.type){
        case actionTypes.USER_LOADING:
        case actionTypes.AUTH_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case actionTypes.USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                error: null,
                user: {
                    ...state.user,
                    ...action.payload
                }
            }


        case actionTypes.REGISTER_SUCCESS:
        case actionTypes.LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload, 
                isAuthenticated: true,
                isLoading: false,
                error: null,
            }

        case actionTypes.LOGIN_FAIL:
        case actionTypes.LOGOUT_SUCCESS:
        case actionTypes.AUTH_ERROR:
        case actionTypes.REGISTER_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                token: localStorage.getItem('token'),
                isAuthenticated: false,
                isLoading: false,
                user: null,
                error: action.error
            }

        default:
            return state


    }
}