import { combineReducers } from 'redux'
import { msgReducer } from './Message'
import {projectReducer } from './Project'


export const rootReducer = combineReducers({
    msg: msgReducer,
    project: projectReducer
})