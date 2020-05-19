import {NEW_MSG } from '../actions/action-type'

const initialState ={
    msg: {}
}

export const msgReducer =(state = initialState, action)=>{
    switch(action.type){
        case NEW_MSG:
            return {
                msg: action.payload
            }
        default:
            return state
    }

}