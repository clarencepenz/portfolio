import {NEW_MSG, GET_MSGS, DELETE_MSG } from '../actions/action-type'

const initialState ={
    msg: {},
    msgs: [],
    status: false
}

export const msgReducer =(state = initialState, action)=>{
    switch(action.type){
        case NEW_MSG:
            return {
                msg: action.payload,
                status: true
            }
        case GET_MSGS:
            return {
                ...state,
                msgs: action.payload
            }
        case DELETE_MSG:
            const mid = action.payload.mid
            return {
                msgs: state.msgs.filter(msg => msg.mid !== mid),
                ...state
           }
        default:
            return state
    }

}

