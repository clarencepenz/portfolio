import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProject, delProject } from '../../actions/projectAction'

class ProjectList extends Component {
    componentDidMount(){
        this.props.getProject()
    }
    render() {
        const projects = this.props.project.map(pro => (
            <div key={pro.pid} style={{display: 'flex', paddingBottom: '10px'}}>
                <div >
                    <img src={pro.url} alt='url' style={{height: 'auto', width: '120px', borderRadius: '10px'}}/>
                </div>
                <div style={{paddingLeft: '20px'}}>
                    <span>Name: {pro.name}</span> 
                    <br/>
                    <span>Technologies: {pro.technologies}</span> 
                    <br/>
                    <span>Description: {pro.description}</span> 
                    <br/>
                    <span>Web: {pro.web}</span>
                    <br/>
                    <span>Code: {pro.repo}</span>
                    <br/>
                        <button onClick={()=> this.props.delProject(pro.pid)}>x</button>
                </div>
            </div>
        ))
        return (
            <div>
                <h3>Project List {' '} <span>{this.props.project.length}</span></h3>
                {projects}
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    project: state.project.projects
})

export default connect(mapStateToProps, {getProject, delProject})  (ProjectList)