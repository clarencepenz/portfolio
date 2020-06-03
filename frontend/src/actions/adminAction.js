import axios from 'axios'
import { ADMIN_LOGIN } from './action-type'

export const createAdmin = (data,  history) => dispatch =>{
    const token = localStorage.token
    axios.post('http://localhost:5000/api/v1/auth/login', data, {
        headers: {
            'content-type': 'application/json',
            'Authorization' : `Bearer ${token}`
        },
       
    })
    .then(user =>{ 
        dispatch({
            type: ADMIN_LOGIN,
            payload: user
        })
        console.log(user)
        localStorage.setItem('token', user.data.token);
        localStorage.setItem('expiration', Date.now() + 2 * 60 * 60 * 1000);
        if (user.status === 200) {
            window.location.assign('/admin-panel')
        } else {
          const error = new Error(user.error);
          throw error;
        }
        
        
    })
   
}
