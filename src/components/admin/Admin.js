import React, { Component } from 'react'
import Messages from './Messages'
import ProjectForm from './ProjectForm'

class Admin extends Component {
    render() {
        return (
            <div>
                <Messages/>
                <ProjectForm/>
            </div>
        )
    }
}
 
export default Admin;