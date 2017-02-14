import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../actions/actionCreator'
import PostContent from './PostContent'

class PostContentContainer extends Component{
  render()
  {
    const {toogleContent, toogleTitle, updateContent, updateTitle} = this.props
    const { index, postId, post, detailedLink, time, photos, title, content } = this.props
    const {isTitleEditing, isContentEditing, focusIndex} = this.props
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
            title={title}
            content={content}
            detailedLink={detailedLink}
            time={time}
            photos={photos}
            onContentUpdate={updateContent}
            onContentDoubleClick={toogleContent}
            onTitleDoubleClick={toogleTitle}
            onTitleUpdate={updateTitle}
        />
    </div>)
  }
}

function mapStateToProps(state){
  return {
    isTitleEditing: state.edit.isTitleEditing,
    focusIndex: state.edit.focusIndex,
    isContentEditing: state.edit.isContentEditing,
  }
}

function mapDispathToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

PostContentContainer = connect(mapStateToProps, mapDispathToProps)(PostContentContainer)

export default PostContentContainer