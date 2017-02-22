import React, { Component } from 'react'

class PostPhoto extends Component {

    handleImageRemoveClick = (file_index) => {
      const { onImageRemove, post } = this.props
      onImageRemove && onImageRemove(post, file_index)
    }

    // shouldComponentUpdate = (nextProps, nextState) => {
    //   if(this.props.post.photo_urls && nextProps.post.photo_urls){
    //     console.log("this", this.props.post.photo_urls.length)
    //     console.log("next", nextProps.post.photo_urls.length)
    //     return this.props.post.photo_urls.length 
    //             !== nextProps.post.photo_urls.length
    //   }
    //   else return this.props.post.photo_urls !== nextProps.post.photo_urls
    // }

    render() {
      const { photo_urls } = this.props.post
      return (
        // photo_urls && photo_urls.length > 0 ? 
        //   <div>
        //     <section id="photos">
        //       {photo_urls.map((url, index) => 
        //         (<div key={ +new Date() + index }>
        //             <img 
        //               key={url} 
        //               src={url} 
        //               alt={"not found"} />
        //         </div>)
        //       )}
        //     </section>
        // </div> : null
        photo_urls && photo_urls.length > 0 > 0 ? 
          <div className="img-container">
            {photo_urls.map((url, file_index) => 
              (<div key={ +new Date() + file_index } className="img-wrap">
                  <span onClick={() => {this.handleImageRemoveClick(file_index)}}
                        className="close">&times;</span>
                  <img 
                    key={url} 
                    src={url} 
                    alt={"not found"} />
              </div>)
            )}
          </div> : null
      )
    }
}

export default PostPhoto