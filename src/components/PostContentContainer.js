import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../actions/actionCreator'
import PostContent from './PostContent'

class PostContentContainer extends Component{
  render()
  {
    const {toogleContent, toogleTitle, updateContent, updateTitle} = this.props
    const { index, isTitleEditing, isContentEditing, detailedLink, time, photos, title, content } = this.props

    return(
    <div className="cd-timeline-content">
        <PostContent
            index={index}
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

function mapDispathToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

PostContentContainer = connect(null, mapDispathToProps)(PostContentContainer)

export default PostContentContainer