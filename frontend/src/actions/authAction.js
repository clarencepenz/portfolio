import { AUTH_CHECK } from './action-type'

export const authCheck = data => dispatch =>{
    const token = localStorage.token
    fetch('http://localhost:5000/api/v1/checkAuth', {
        headers: {
            'content-type': 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .then(auth => {
        if (auth.status === 200) {
        } else {
          const error = new Error(auth.error);
          throw error;
        }
        dispatch({
            type: AUTH_CHECK,
            payload: auth
        })
    } )
    .catch(err => {
        console.error(err);
        
      });
}
