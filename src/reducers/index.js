import { combineReducers } from 'redux'
import { msgReducer } from './Message'


export const rootReducer = combineReducers({
    msg: msgReducer
})