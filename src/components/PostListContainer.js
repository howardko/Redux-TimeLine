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
    this.props.fetchPosts()
  }

  render(){
    const { tags, posts, addPost, addTags} = this.props
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
        <PostAdd onPostAdd={addPost} onTagsAdd={addTags}/>
        {elements}
      </section>
    )
  }
}

function _getFilter(posts, tags){
  const filters = posts.filter((post) => {
      const intersections = utility.intersect(post.tags, tags)
      return tags.length === 0 || intersections.length > 0
    }
  )

  return filters
}

function mapStateToProps(state){
  return {
    posts: state.posts,
    tags: state.tags,
  }
}

function mapDispathToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

PostListContainer = withRouter(connect(mapStateToProps, mapDispathToProps)(PostListContainer))

export default PostListContainer