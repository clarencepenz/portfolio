import React, { Component } from 'react'
import { connect} from 'react-redux'
import { createMSG } from '../../actions/messageAction'
import { StyledContact } from '../styles/StyledContact'

class Contact extends Component {
    state= {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value})

    onSubmit =(e)=>{
        e.preventDefault()
        const data = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }
        this.props.createMSG(data)

        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '' 
        })
    }
    
    render() {
        return (
            <StyledContact>
                <div style={{paddingTop: '20px'}}>
                  <h3 className='title' style={{ marginLeft: '90px', marginTop: '0',  paddingLeft: '20px', borderLeft: '6px solid #33a21d', marginBottom: '0'}}>Contact</h3>
                </div>
                <div className='contactStyle'>
                <h3>Wanna hire me?</h3>
                <form onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        placeholder='Enter your name'
                        onChange={this.onChange}
                        />
                        <br/>
                        <input
                        type='text'
                        name='subject'
                        value={this.state.subject}
                        placeholder='Subject'
                        onChange={this.onChange}
                        />
                        <br/>
                        <input
                        type='text'
                        name='email'
                        value={this.state.email}
                        placeholder='Enter your email address'
                        onChange={this.onChange}
                        />
                        <br/>
                        <textarea
                        type='text'
                        name='message'
                        value={this.state.message}
                        placeholder='Enter your message'
                        onChange={this.onChange}
                        />
                        <br/>
                        {this.props.msg ? 'Msg sent' : ''}
                        <button type='submit'>Send</button>
                </form>
                </div>
            </StyledContact>
        )
    }
}

const mapStateToProps = (state)=>({
    msg: state.msg.status
})

export default  connect(mapStateToProps, {createMSG})(Contact)