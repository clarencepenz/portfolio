import {ADMIN_LOGIN } from '../actions/action-type'

const initialState ={
    admin: {}
}

export const adminReducer =(state = initialState, action)=>{
    switch(action.type){
        case ADMIN_LOGIN:
            return {
               admin: action.payload
            }
        default:
            return state
    }

}

