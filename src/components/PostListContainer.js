import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router';

import * as actionCreators from '../actions/actionCreator'
import PostAdd from './PostAdd'
import Post from './Post'
import * as utility from '../utility/utility.js'

class PostListContainer extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render(){
    const { posts, addPost} = this.props
    const { key } = this.props.location.query
    const tags = (key && key.split(",")) || []
    const filters = _getFilter(posts, tags)
    const elements = filters.map((post, index) => (
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

function _getFilter(posts, filters){
  filters = posts.filter((post) => {
      console.log(post)
      const intersections = utility.intersect(post.tags, filters)
      console.log(filters)
      return filters.length === 0 || intersections.length > 0
    }
  )

  return filters
}

function mapStateToProps(state){
  return {
    posts: state.posts,
  }
}

function mapDispathToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

PostListContainer = withRouter(connect(mapStateToProps, mapDispathToProps)(PostListContainer))

export default PostListContainer