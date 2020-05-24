import { GET_MSGS, DELETE_MSG, NEW_MSG} from './action-type'


export const createMSG = data => dispatch =>{
    fetch('http://localhost:3000/api/v1/message', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(msg => dispatch({
        type: NEW_MSG,
        payload: msg
    }))
}

export const getMsgs =()=> dispatch =>{
    fetch('http://localhost:3000/api/v1/message')
    .then(res => res.json())
    .then(msg => dispatch({
        type: GET_MSGS,
        payload: msg
    }))
}


export const delMsgs =(mid)=> dispatch =>{
    fetch(`http://localhost:3000/api/v1/message/${mid}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(msg => dispatch({
        type: DELETE_MSG,
        payload: msg
    }))
}