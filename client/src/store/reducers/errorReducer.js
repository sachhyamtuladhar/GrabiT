import * as actionTypes from "../actions/actionTypes";

const initialState = {
    msg: {},
    status: null,
    id: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_ERRORS:
            return{
                ...state,
                msg: {},
                status: null,
                id: null
            }
        case actionTypes.CLEAR_ERRORS:
            return{
                ...state,
                msg: {},
                status: null,
                id: null
            }
        default:
            return state
    }
}