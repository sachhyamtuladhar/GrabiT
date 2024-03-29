import {combineReducers} from 'redux'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import uiReducer from './uiReducer'


export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    ui: uiReducer
})
