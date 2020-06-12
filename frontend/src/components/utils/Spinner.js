import React, { Component } from 'react'
import { StyledSpinner } from '../styles/StyledSpinner'

 class Spinner extends Component {
    render() {
        return (
            <div>
                 <StyledSpinner/>
                 <p style={{color: '#fff', textAlign: 'center', fontSize: '13px'}}>projects loading...</p>
            </div>
        )
    }
}


export default Spinner;