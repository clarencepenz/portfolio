import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { StyledNav } from '../styles/StyledNav'

export default class NavBar extends Component {
    render() {
        return (
            <StyledNav>
                 <div>
                    <Link style={linkStyle} to={"/"}>
                        <h1>Clarence</h1>
                    </Link> 
                  </div>                
            </StyledNav>
        )
    }
}

const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
}
