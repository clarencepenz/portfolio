import React, { Component } from 'react'
import Messages from './Messages'
import ProjectForm from './ProjectForm'
import ProjectList from './ProjectList'
import NavBar from '../sections/NavBar'

class Admin extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#000', color: '#fff', minHeight: '100vh'}}>
                    <NavBar/>
                <div style={{width: '85%', margin: '0 auto', display: 'flex'}}>
                    <div>
                         <Messages/>
                    </div>
                    <div>
                      <ProjectForm/>
                      <ProjectList/>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Admin;