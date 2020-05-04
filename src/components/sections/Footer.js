import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div style={footerStyle}>
                Footer
            </div>
        )
    }
}


const footerStyle ={
    minHeight: '100px',
    textAlign: 'center',
    backgroundColor: '#000',
    color: '#fff'
}