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
export const authFail = (e)  => {
    return {
        type: actionTypes.AUTH_ERROR,
        payload: e
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
    dispatch(loadStart())

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
                dispatch(returnErrors(e.response.data, e.response.status))
                dispatch(authFail(e))
            })
    }
    
}

