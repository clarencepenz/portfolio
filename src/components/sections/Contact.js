import React, { Component } from 'react'
import { StyledContact } from '../styles/StyledContact'

export default class Contact extends Component {
    state= {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value})
    render() {
        return (
            <StyledContact>
                <div style={{paddingTop: '20px'}}>
                  <h3 className='title' style={{ marginLeft: '90px', marginTop: '0',  paddingLeft: '20px', borderLeft: '6px solid #33a21d', marginBottom: '0'}}>Contact</h3>
                </div>
                <div className='contactStyle'>
                <h3>Wanna hire me?</h3>
                <form>
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
                        <button>Send</button>
                </form>
                </div>
            </StyledContact>
        )
    }
}


