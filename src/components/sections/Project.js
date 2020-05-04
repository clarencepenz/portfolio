import React, { Component } from 'react'

export default class Project extends Component {
    render() {
        return (
            <div style={projectStyle}>
                Projects
            </div>
        )
    }
}



const projectStyle ={
    minHeight: '400px',
    textAlign: 'center',
    backgroundColor: '#000',
    color: '#fff'
}