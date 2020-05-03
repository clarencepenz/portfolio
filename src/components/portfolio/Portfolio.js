import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../../actions/postAction'
import Header from '../sections/Header'
import Hero from '../sections/Hero'
import Skills from '../sections/Skills'
import Project from '../sections/Project'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

class Portfolio extends Component {
    componentDidMount(){
        this.props.fetchPost()
    }
    render() {
        return (
            <div>
                <h1>Portfolio</h1>
                <Header/>
                <Hero/>
                <Skills/>
                <Project/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts
})

export default connect(mapStateToProps, {fetchPost})(Portfolio);