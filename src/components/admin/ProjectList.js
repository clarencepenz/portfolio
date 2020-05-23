import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProject, delProject } from '../../actions/projectAction'

class ProjectList extends Component {
    componentDidMount(){
        this.props.getProject()
    }
    render() {
        const projects = this.props.project.map(pro => (
            <div key={pro.pid}>
                <img src={pro.url} alt='url'/>
                <br/>
               <span>Name: {pro.name}</span> 
               <br/>
               <span>Technologies: {pro.technologies}</span> 
               <br/>
               <span>Description: {pro.description}</span> 
               <br/>
               <span>Web: {pro.web}</span>
               <br/>
               <span>Code: {pro.code}</span>
                <button onClick={()=> this.props.delProject(pro.pid)}>x</button>
            </div>
        ))
        return (
            <div>
                <h3>Project List</h3>
                {projects}
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    project: state.project.projects
})

export default connect(mapStateToProps, {getProject, delProject})  (ProjectList)