import React, { Component } from 'react'

import PostTitle from './PostTitle'
import PostMessage from './PostMessage'
import PostPhoto from './PostPhoto'
import TitleEditForm from './TitleEditForm'
import ContentEditForm from './ContentEditForm'
import PostAddTag from './PostAddTag'

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

  renderTagViewMode() {
    const { index, tags, onTagDoubleClick } = this.props
    return(
      <h2
        onDoubleClick={() => onTagDoubleClick(index)}>
        {tags && tags.join(",")}
     </h2>
    )
  }

  renderTagEditMode() {
    const { index, postId, tags, post, onTagUpdate } = this.props
    return(
      <PostAddTag 
        tags={tags}
        onBlur={ (tags) => onTagUpdate(index, postId, post, tags)}
      />
    )
  }

  render()
  {
    const { focused, isTitleEditing, isContentEditing, isTagEditing, detailedLink, time } = this.props
    const titleDisplay = (isTitleEditing && focused) ? this.renderTitleEditMode() : this.renderTitleViewMode() 
    const contentDisplay = (isContentEditing && focused) ? this.renderContentEditMode() : this.renderContentViewMode()
    const tagDisplay = (isTagEditing && focused) ? this.renderTagEditMode() : this.renderTagViewMode()
    const { onPostRemove, onImageRemove } = this.props
    const { post, index, postId } = this.props
    return(
    <div>
        <div className="tag">
          <span className="close-thik" 
                onClick={() => onPostRemove(index, postId, post.file_names)}>&times;</span>
        </div>
        {titleDisplay}
        {contentDisplay}
        {tagDisplay}
        <PostPhoto post={post} onImageRemove={onImageRemove} />
        <a href={detailedLink} className="cd-read-more" style={{margin: "5px"}} >Read more</a>
        <span className="cd-date">{time}</span>
    </div>)
  }
}

export default PostContent