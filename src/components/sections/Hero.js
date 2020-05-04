import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (
            <div style={heroStyle}>
                Hero
            </div>
        )
    }
}

const heroStyle ={
    minHeight: '400px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4'
}