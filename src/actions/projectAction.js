import { GET_PROJECTS, EDIT_PROJECT, NEW_PROJECT, DELETE_PROJECT} from './action-type'

export const getProject = data => dispatch =>{
    fetch('http://localhost:3000/api/v1/project')
    .then(res => res.json())
    .then(msg => dispatch({
        type: GET_PROJECTS,
        payload: msg
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
    fetch('http://localhost:3000/api/v1/project', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(msg => dispatch({
        type: NEW_PROJECT,
        payload: msg
    }))
}