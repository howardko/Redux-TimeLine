import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/actionCreator'
import { v4 } from 'node-uuid';

class TagsFilter extends Component {

  componentDidMount() {
    this.props.loadTags()
  }

  render() {
    const { tags, removeTag } = this.props
    const elements = tags.map((tag, index) => (
        <div key={v4()} className="tag">{tag}
          <span className="close-thik" 
                onClick={() => {removeTag(tag)}}>&times;</span>
        </div>))

    return (
      <div>{elements}</div>
    )
  }
}

function mapStateToProps(state){
  return {
    tags: state.tags,
  }
}

function mapDispathToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

TagsFilter = connect(mapStateToProps, mapDispathToProps)(TagsFilter)

export default TagsFilter;
