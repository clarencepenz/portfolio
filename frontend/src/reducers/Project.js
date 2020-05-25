import {NEW_PROJECT, GET_PROJECTS, DELETE_PROJECT} from '../actions/action-type'

const initialState ={
    project: {},
    projects: [],
    loading: true
}

export const projectReducer =(state = initialState, action)=>{
    switch(action.type){
        case GET_PROJECTS:
            return {
                projects: action.payload,
                loading: false
            }
        case NEW_PROJECT:
            return {
                ...state,
                project: action.payload
            }
        case DELETE_PROJECT:
            const pid = action.payload.pid
            return {
                projects: state.projects.filter(project => project.pid !== pid),
                ...state
           }
        default:
            return state
    }

}

