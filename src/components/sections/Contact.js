import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div style={contactStyle}>
                Contact
            </div>
        )
    }
}


const contactStyle ={
    minHeight: '200px',
    textAlign: 'center',
    backgroundColor: 'maroon',
    color: '#fff'
}