import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div style={navBar}>
                <h1 style={brand_name}>Clarence</h1>
            </div>
        )
    }
}


const navBar ={
    color: '#fff'
}

const brand_name ={
    paddingLeft: '90px',
    paddingTop: '20px'
}