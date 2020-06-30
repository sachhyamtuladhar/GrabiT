import * as actionTypes from "./actionTypes";


export const hideNavbar = () => {
    return {
        type: actionTypes.HIDE_NAVBAR
    }
}

export const showNavbar = () => {
    return {
        type: actionTypes.SHOW_NAVBAR
    }
}