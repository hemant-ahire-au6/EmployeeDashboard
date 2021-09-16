import {CREATE_LOGIN,CREATE_LOGOUT} from '../constant'


const setProduct = (product) =>{
    return {
        type:"SET_PRODUCT",
        payload:product
    }
}




export const setLogin = () =>{
    return {
        type:CREATE_LOGIN
    }
} 

export const setLogout = () =>{
    return {
        type:CREATE_LOGOUT
    }
} 