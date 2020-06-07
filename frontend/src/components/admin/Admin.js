import React, { Component } from 'react'
import Messages from './Messages'
import ProjectForm from './ProjectForm'
import ProjectList from './ProjectList'
import NavBar from '../sections/NavBar'
import { StyledAdmin } from '../styles/StyledAdmin'

class Admin extends Component {
    render() {
        return (
            <StyledAdmin>
                <div>
                        <NavBar/>
                    <div className='Main'>
                        <div className='Messages'>
                            <Messages/>
                        </div>
                        <div className='Projects'>
                        <ProjectForm/>
                        <ProjectList/>
                        </div>
                    </div>
                </div>
            </StyledAdmin>
        )
    }
}
 
export default Admin;