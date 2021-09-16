import {CREATE_LOGIN,CREATE_LOGOUT} from '../constant'


const initialState = {
    token:[]
} 

const reducer = (state=initialState,action) =>{
    switch (action.type){
        case CREATE_LOGIN:
            return  {
                ...state,
                token:Math.random()
            }

        case CREATE_LOGOUT:
            return {
                ...state,
                token:[]
            }
        
        default:
            return {
                ...state
            }
    }
}

export default reducer;

