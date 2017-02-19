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
          post={post}
          postId={post.id} 
          title={post.title}
          content={post.content}
          time={post.time}
          photo_urls={post.photo_urls}
          tags={post.tags}
          detailedLink={post.detailedLink}
        /> 
      </div>
    )
  }
}

export default Post