import * as actionTypes from "../actions/actionTypes";

const initialState = {
    showNavbar: false
}


export default (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SHOW_NAVBAR:
            return {
                ...state,
                showNavbar: true
            }
        case actionTypes.HIDE_NAVBAR:
            return {
                ...state,
                showNavbar: false
            }
        default:
            return state
    }
}