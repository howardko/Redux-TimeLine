import React, { Component } from 'react'
import TagsInput from 'react-tagsinput'

import 'react-tagsinput/react-tagsinput.css' 

class PostAddTag extends Component {
  constructor(props) {
    super()
    this.state = {tags: props.tags || []}
  }

  handleChange = (tags) => {
    const {onTagChange} = this.props
    this.setState({tags})
    onTagChange && onTagChange(tags)
  }

  clear = () => {
    this.setState({tags: []})
  }

  render() {
    return <TagsInput value={this.state.tags} onChange={this.handleChange} />
  }
}

export default PostAddTag