import React, { Component } from 'react'

class PostPhoto extends Component {

    render() {
      const { photos } = this.props
      return (
        photos.length > 0 ? 
          <div>
            <section id="photos">
              {photos.map((file, index) => 
                (<div key={ +new Date() + index }>
                    <img 
                      key={file.preview} 
                      src={file.preview} 
                      alt={file.name} />
                </div>)
              )}
            </section>
        </div> : null
      )
    }
}

export default PostPhoto