import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAdmin} from '../../actions/adminAction'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }



    onSubmit =(e)=>{
        e.preventDefault()
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.createAdmin(data)
        this.setState({
            email: '',
            password: ''
        })
                       
    }

    onChange=(e)=> this.setState({[e.target.name]: e.target.value})
    
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{color: '#fff'}}>
                <h2>ADMIN LOGIN</h2>
                <div>
                <label htmlFor="email">Email address</label>
                <input type="email" required className="form-control" name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.onChange}  />
                </div>
                <div >
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onChange}  />
                </div>
                <button employeeId: "",
    password: "", >Login</button>
            </form>
        )
    }
}

export default connect(null, {createAdmin})(Login)