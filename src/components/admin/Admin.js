import React, { Component } from 'react'
import Messages from './Messages'
import ProjectForm from './ProjectForm'
import ProjectList from './ProjectList'

class Admin extends Component {
    render() {
        return (
            <div>
                <Messages/>
                <ProjectForm/>
                <ProjectList/>
            </div>
        )
    }
}
 
export default Admin;