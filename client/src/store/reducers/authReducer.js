import * as actionTypes from "../actions/actionTypes";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    user: null
}

export default (state=initialState, action) => {
    switch(action.type){
        case actionTypes.USER_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case actionTypes.USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
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
                isLoading: false
               
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
                user: null
            }

        default:
            return state


    }
}