import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../actions/actionCreator'
import PostContent from './PostContent'

class PostContentContainer extends Component{
  render()
  {
    const {toogleContent, toogleTitle, toogleTag, updateContent, updateTitle, updateTag} = this.props
    const { index, postId, post, detailedLink, time, photos, tags, title, content } = this.props
    const {isTitleEditing, isContentEditing, isTagEditing, focusIndex} = this.props
    const focused = (index === focusIndex)
    return(
    <div className="cd-timeline-content">
        <PostContent
            index={index}
            focused={focused}
            postId={postId}
            post={post}
            isTitleEditing={isTitleEditing}
            isContentEditing={isContentEditing}
            isTagEditing={isTagEditing}
            title={title}
            content={content}
            detailedLink={detailedLink}
            time={time}
            photos={photos}
            tags={tags}
            onContentUpdate={updateContent}
            onContentDoubleClick={toogleContent}
            onTagDoubleClick={toogleTag}
            onTitleDoubleClick={toogleTitle}
            onTitleUpdate={updateTitle}
            onTagUpdate={updateTag}
        />
    </div>)
  }
}

function mapStateToProps(state){
  return {
    isTitleEditing: state.edit.isTitleEditing,
    focusIndex: state.edit.focusIndex,
    isContentEditing: state.edit.isContentEditing,
    isTagEditing: state.edit.isTagEditing,
  }
}

function mapDispathToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

PostContentContainer = connect(mapStateToProps, mapDispathToProps)(PostContentContainer)

export default PostContentContainer