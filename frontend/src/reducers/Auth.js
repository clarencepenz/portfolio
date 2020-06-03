import { AUTH_CHECK } from '../actions/action-type'

const initialState ={
    auth: {},
    loading: true,
    redirect: false
}

export const adminReducer =(state = initialState, action)=>{
    switch(action.type){
        case AUTH_CHECK:
            return {
                loading: false,
                redirect: true,
               auth: action.payload
            }
        default:
            return state
    }

}

