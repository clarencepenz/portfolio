import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../../actions/postAction'

class Blog extends Component {
    componentDidMount(){
        this.props.fetchPost()
    }
    render() {
        return (
            <div>
                <h1>Blog</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts
})

export default connect(mapStateToProps, {fetchPost})(Blog);