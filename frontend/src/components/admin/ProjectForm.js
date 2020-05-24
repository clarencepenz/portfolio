import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../actions/projectAction'
class ProjectForm extends Component {
    state = {      
        url: null,
        img: '',
        name: '',
        technologies: '',
        description: '',
        web: '',
        repo: ''
    }

    onSubmit=(e)=>{
        e.preventDefault()
        const { url, name, technologies, description, web, repo } = this.state;
        const data = new FormData()
        data.append('url', url)
        data.append('name',  name)
        data.append('technologies',  technologies)
        data.append('description',  description)
        data.append('web',  web)
        data.append('repo',  repo)

        this.props.createProject(data)
        
        this.setState({ 
                        url: '',
                        name: '',
                        technologies: '',
                        description: '',
                        web: '',
                        repo: ''
                    })
    }

    onChange=(e)=> this.setState({[e.target.name]: e.target.value})
    handleFile=(e)=> {
        let file = e.target.files[0]
        const img = URL.createObjectURL(e.target.files[0])
        this.setState({url: file, img})
    }

    render() {
        const {url, img} = this.state
        return (
            <div> 
                <h3>project</h3>
                 <form onSubmit={this.onSubmit}  >
                 <div>
                        <img src={url  ? img  || url  : 'logo'  } alt='project' />
                    </div>
                 <input              
                    type="file"
                    name="file"
                    className='Gif-Image-Select'
                    onChange={this.handleFile}
                    />
                    <br/>
                    <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    />
                     <br/>
                    <input
                    type="text"
                    name="technologies"
                    placeholder="technologies"
                    value={this.state.technologies}
                    onChange={this.onChange}
                    />
                     <br/>
                    <input
                    type="text"
                    name="description"
                    placeholder="description"
                    value={this.state.description}
                    onChange={this.onChange}
                    />
                     <br/>
                    <input
                    type="text"
                    name="web"
                    placeholder="web"
                    value={this.state.we}
                    onChange={this.onChange}
                    />
                     <br/>
                    <input
                    type="text"
                    name="repo"
                    placeholder="repo"
                    value={this.state.repo}
                    onChange={this.onChange}
                    />
                     <br/>
                     
                   
                    <button 
                    type='submit'
                    value='submit'
                    >Publish</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {createProject})(ProjectForm)