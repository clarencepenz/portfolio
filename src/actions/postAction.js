//import axios from 'axios'
import { NEW_POST} from './action-type'

export const createPost = data => dispatch =>{
    fetch('http://localhost:3000/api/v1/message', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(msg => dispatch({
        type: NEW_POST,
        payload: msg
    }))
}