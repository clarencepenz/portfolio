import {NEW_POST } from '../actions/action-type'

const initialState ={
    post: {}
}

export const postReducer =(state = initialState, action)=>{
    switch(action.type){
        case NEW_POST:
            return {
                post: action.payload
            }
        default:
            return state
    }

}