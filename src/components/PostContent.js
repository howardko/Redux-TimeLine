import React, { Component } from 'react'

import PostTitle from './PostTitle'
import PostMessage from './PostMessage'
import PostPhoto from './PostPhoto'
import TitleEditForm from './TitleEditForm'
import ContentEditForm from './ContentEditForm'

class PostContent extends Component{

  renderTitleViewMode() {
    const { index, title, onTitleDoubleClick } = this.props
    return(
      <PostTitle 
        title={title} 
        onTitleDoubleClick={ () => onTitleDoubleClick(index)}
      />
    )
  }

  renderTitleEditMode() {
    const { index, postId, title, post, onTitleUpdate } = this.props
    return(
      <TitleEditForm 
        title={title}
        onTitleUpdate={ (title) => onTitleUpdate(index, postId, post, title)}
      />
    )
  }

  renderContentViewMode() {
    const { index, content, onContentDoubleClick } = this.props
    return(
      <PostMessage 
        content={content} 
        onContentDoubleClick={ () => onContentDoubleClick(index)}
      />
    )
  }

  renderContentEditMode() {
    const { index, postId, post, content, onContentUpdate } = this.props
    return(
      <ContentEditForm 
        content={content}
        onContentUpdate={(content) => onContentUpdate(index, postId, post, content)}
      />
    )
  }

  render()
  {
    const { focused,isTitleEditing, isContentEditing, detailedLink, time, photos } = this.props
    const titleDisplay = (isTitleEditing && focused) ? this.renderTitleEditMode() : this.renderTitleViewMode() 
    const contentDisplay = (isContentEditing && focused) ? this.renderContentEditMode() : this.renderContentViewMode()
    return(
    <div>
        {titleDisplay}
        {contentDisplay}
        <PostPhoto photos={photos} />
        <a href={detailedLink} className="cd-read-more" style={{margin: "5px"}} >Read more</a>
        <span className="cd-date">{time}</span>
    </div>)
  }
}

export default PostContent