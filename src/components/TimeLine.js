import React, { Component } from 'react';

import '../style/bootstrap.min.css'
import '../style/App.scss'
import PostListContainer from './PostListContainer'
import TagsFilter from './TagsFilter'

class TimeLine extends Component {

  render() {
    return (
      <div>
        <TagsFilter />
        <PostListContainer/>
      </div>
    );
  }
}

export default TimeLine;
