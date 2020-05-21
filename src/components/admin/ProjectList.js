import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProject } from '../../actions/projectAction'

class ProjectList extends Component {
    componentDidMount(){
        this.props.getProject()
    }
    render() {
        const projects = this.props.project.map(pro => (
            <div key={pro.pid}>
                {pro.url}
                {pro.name}
                {pro.technologies}
                {pro.description}
                {pro.web}
                {pro.code}
            </div>
        ))
        return (
            <div>
                {projects}
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    project: state.project.projects
})

export default connect(mapStateToProps, {getProject})  (ProjectList)