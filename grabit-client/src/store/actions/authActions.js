import axios from 'axios'

import { 
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL 
} from "./actions";

import { returnErrors } from "./errorActions";

export const loadUser = () => (dispatch, getState) =>{
    // User loading
    dispatch({ type: USER_LOADING })

    // get token from local storage 
    const token = getState().auth.token;

    // headers
    const config = {
        header: {
            "Content-type": "application/json"
        }
    }
    
    // if token, add to headers
        // config.header['Authorization'] = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWU4ZWM5ZWQyZDFiODM4ZmMyNzYyMDAiLCJpYXQiOjE1OTIzMjMyMzAsImV4cCI6MTU5MjQ5NjAzMH0.glColW90HJZYM0PaxcPqioGOIMiWV3PvP6h6deNT0Bc'
    axios.defaults.headers.common = {'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWU4ZWM5ZWQyZDFiODM4ZmMyNzYyMDAiLCJpYXQiOjE1OTIzMjUzMDQsImV4cCI6MTU5MjQ5ODEwNH0.Adwk-Vrpb5JsNpW562i_OyI2OKwatsQlHCzlOdQQKC8"}

    axios.get('/users/me', config.header)
        .then(
            res=>{
                console.log(['LOAD USER:'], res)
                dispatch({
                    type: USER_LOADED,
                    payload: res
                })
            }
        ).catch(e=>{
            console.log(e)
            dispatch(returnErrors(e.response.data, e.response.status))
            dispatch({
                type: AUTH_ERROR,
                payload: e
            })
        })
}