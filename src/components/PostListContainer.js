import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../actions/actionCreator'
import PostAdd from './PostAdd'
import Post from './Post'

class PostListContainer extends Component {
  render(){
    const { posts, addPost} = this.props

    const elements = posts.map((post, index) => (
        <Post
          index={index}
          key={post.id}
          post={post}/>
      )
    )

    return (
      <section id="cd-timeline" className="cd-container">
        <PostAdd onPostAdd={addPost} />
        {elements}
      </section>
    )
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts,
  }
}

function mapDispathToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

PostListContainer = connect(mapStateToProps, mapDispathToProps)(PostListContainer)

export default PostListContainer