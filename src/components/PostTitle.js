import React from 'react'

const PostTitle = ({title, onTitleDoubleClick}) => (
   <h2
    onDoubleClick={onTitleDoubleClick}>
    {title}
    </h2>
)

export default PostTitle