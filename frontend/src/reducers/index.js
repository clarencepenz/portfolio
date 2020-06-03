import { combineReducers } from 'redux'
import { msgReducer } from './Message'
import {projectReducer } from './Project'
import { adminReducer } from './Admin'


export const rootReducer = combineReducers({
    msg: msgReducer,
    project: projectReducer,
    admin: adminReducer
})