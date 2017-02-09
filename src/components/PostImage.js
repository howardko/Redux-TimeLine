import React from 'react'

const PostImage = ({ imageFile, imageAlt }) => (
   <div className="cd-timeline-img cd-picture">
      <img src={imageFile} alt={imageAlt} />
   </div>
)

export default PostImage