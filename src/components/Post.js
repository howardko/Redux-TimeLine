import React, { Component } from 'react'

import PostContentContainer from './PostContentContainer'
import PostImage from './PostImage'

class Post extends Component { 
  render(){
    const { post, index } = this.props
    return(
      <div className="cd-timeline-block">
        <PostImage 
          imageFile={post.imageFile}
          imageAlt={post.imageAlt}
        />
        <PostContentContainer
          index={index} 
          title={post.title}
          content={post.content}
          time={post.time}
          photos={post.photos}
          detailedLink={post.detailedLink}
        /> 
      </div>
    )
  }
}

export default Post