import React, { Component } from 'react'
import { StyledContact } from '../styles/StyledContact'

export default class Contact extends Component {
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
                        value=''
                        placeholder='Enter your name'
                        />
                        <br/>
                        <input
                        type='text'
                        value=''
                        placeholder='Subject'
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
                        <button>Send</button>
                </form>
                </div>
            </StyledContact>
        )
    }
}


