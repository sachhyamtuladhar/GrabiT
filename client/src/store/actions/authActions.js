import axios from 'axios'

import * as actionTypes from "./actionTypes";

import { returnErrors } from "./errorActions";

export const loadStart = () => {
    return { 
        type: actionTypes.USER_LOADING 
    }
}


export const logoutSuccess = ()  => {
    return {
        type: actionTypes.LOGOUT_SUCCESS,
    }
}

export const authStart = ()  => {
    return {
        type: actionTypes.AUTH_START,
    }
}

export const authFail = (error)  => {
    return {
        type: actionTypes.AUTH_ERROR,
        error
    }
}

export const loginFail = (error)  => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error
    }
}

export const loginSuccess = (token, user)  => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: {
            token,
            user
        }
    }
}

export const signupSuccess = (token, user)  => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        payload: {
            token,
            user
        }
    }
}


export const userLoaded = (res) => {
    return {
        type: actionTypes.USER_LOADED,
        payload: res
    }
}

export const loadUser = () => (dispatch, getState) =>{
    // User loading
    
    // get token from local storage 
    const token = getState().auth.token;
    
    // if token, add to headers
    if(token){
        dispatch(loadStart())
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        // config.header['Authorization'] = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWU4ZWM5ZWQyZDFiODM4ZmMyNzYyMDAiLCJpYXQiOjE1OTIzMjMyMzAsImV4cCI6MTU5MjQ5NjAzMH0.glColW90HJZYM0PaxcPqioGOIMiWV3PvP6h6deNT0Bc'
        
        // headers
        const config = {
            header: {
                "Content-type": "application/json"
            }
        }

        axios.get('/users/me', config)
            .then(
                res=>{
                    dispatch(userLoaded(res.data))
                }
            ).catch(e=>{
                console.log(e)
                dispatch(returnErrors(e.response.data, e.response.status))
                dispatch(authFail(e))
            })
    }

    
}

export const storeToken = (token, user) => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        payload: {
            token,
            user
        }
    }
}

export const clearAuthError = () => {
    return {
        type: actionTypes.CLEAR_ERRORS
    }
}


export const logOut = () => (dispatch, getState) =>{
    // get token from local storage 
    const token = getState().auth.token;

    // if token, add to headers
    if(token){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        // config.header['Authorization'] = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWU4ZWM5ZWQyZDFiODM4ZmMyNzYyMDAiLCJpYXQiOjE1OTIzMjMyMzAsImV4cCI6MTU5MjQ5NjAzMH0.glColW90HJZYM0PaxcPqioGOIMiWV3PvP6h6deNT0Bc'
        
        // headers
        const config = {
            header: {
                "Content-type": "application/json"
            }
        }

        axios.post('/users/logout', config)
            .then(
                res=>{
                    dispatch(logoutSuccess())
                }
            ).catch(e=>{
                console.log(e)
                dispatch(authFail(e))
            })
    }
    
}

export const login = (history, formData) => (dispatch, getState) => {
    dispatch(authStart())
    axios.post('/users/login', formData)
        .then(res=>{

            dispatch(loginSuccess(res.data.token, res.data.user))
            history.push('/')
        })
        .catch(e=>{
            console.log('error:', e.response.data)
            dispatch(loginFail( e.response.data))
        })
}


export const signup = (history, formData) => (dispatch, getState) => {
    dispatch(authStart())
    axios.post('/users', formData)
        .then(res=>{

            dispatch(signupSuccess(res.data.token, res.data.user))
            history.push('/')
        })
        .catch(e=>{
            console.log('error:', e.response.data)
            dispatch(loginFail( e.response.data))
        })
}
