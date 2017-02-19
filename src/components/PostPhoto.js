import React, { Component } from 'react'

class PostPhoto extends Component {

    render() {
      const { photo_urls } = this.props
      return (
        photo_urls.length > 0 ? 
          <div>
            <section id="photos">
              {photo_urls.map((url, index) => 
                (<div key={ +new Date() + index }>
                    <img 
                      key={url} 
                      src={url} 
                      alt={"not found"} />
                </div>)
              )}
            </section>
        </div> : null
      )
    }
}

export default PostPhoto