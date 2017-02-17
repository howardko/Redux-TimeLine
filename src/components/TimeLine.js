import React, { Component } from 'react';
import '../style/bootstrap.min.css'
import '../style/App.scss'
import PostListContainer from './PostListContainer'

class TimeLine extends Component {

  render() {
    return (
      <div>
        <PostListContainer/>
      </div>
    );
  }
}


export default TimeLine;
