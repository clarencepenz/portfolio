import React, { Component } from 'react'
import { StyledContact } from '../styles/StyledContact'

export default class Contact extends Component {
    render() {
        return (
            <StyledContact>
                <div style={{paddingTop: '20px'}}>
                  <h3 style={{ marginLeft: '60px', marginTop: '0',  paddingLeft: '10px', borderLeft: '3px solid green', marginBottom: '0'}}>Contact</h3>
                </div>
                <div className='contactStyle'>
                <h3>Wanna reach out? Send a msg</h3>
                <form>
                    <input
                        type='text'
                        value=''
                        placeholder='Enter your name'
                        />
                        <br/>
                        <input
                        type='text'
                        value=''
                        placeholder='Enter your email address'
                        />
                        <br/>
                        <textarea
                        type='text'
                        value=''
                        placeholder='Enter your message'
                        />
                        <br/>
                        <button>Send message</button>
                </form>
                </div>
            </StyledContact>
        )
    }
}


