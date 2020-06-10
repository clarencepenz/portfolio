import React, { Component } from 'react'

export default class Success extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#fff', color: '#33a21d', width: '80%', margin: '4px auto'}}>
                <h4 style={{margin: '0', padding: '4px 0', fontWeight: '600'}}>Message sent. I'll respond ASAP</h4>
            </div>
        )
    }
}
