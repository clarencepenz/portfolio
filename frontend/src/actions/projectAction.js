import axios from 'axios'
import { GET_PROJECTS, EDIT_PROJECT, NEW_PROJECT, DELETE_PROJECT} from './action-type'

export const getProject = () => dispatch =>{
    fetch('http://localhost:3000/api/v1/project')
    .then(res => res.json())
    .then(project => dispatch({
        type: GET_PROJECTS,
        payload: project,
        loading: false
    }))
}


export const editProject =( data, pid) => dispatch =>{
    fetch(`http://localhost:3000/api/v1/project/${pid}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(msg => dispatch({
        type: EDIT_PROJECT,
        payload: msg
    }))
}


export const delProject =(pid)=> dispatch =>{
    fetch(`http://localhost:3000/api/v1/project/${pid}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(msg => dispatch({
        type: DELETE_PROJECT,
        payload: msg
    }))
}


export const createProject = data => dispatch =>{
    axios.post('http://localhost:3000/api/v1/project', data, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
    .then(project => dispatch({
        type: NEW_PROJECT,
        payload: project
    }))
}