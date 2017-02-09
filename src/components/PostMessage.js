import React from 'react'

const PostMessage = ({ content, onContentDoubleClick }) => (
    <p 
        onDoubleClick={onContentDoubleClick}
    >
    {content}
    </p> 
)

export default PostMessage