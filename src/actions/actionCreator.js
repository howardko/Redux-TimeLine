import {storage} from '../database'

export function fetchPosts() {
    return (dispatch) => {
      fetch('http://localhost:3004/posts')
        .then((response) => response.json())
        .then((posts) => dispatch({
          type: "FETCH_POSTS_SUCCESS",
          posts
        }));
    };
  }

export function addPost(post){
  return (dispatch) => {
      let files = post.photos
      let storageRef = storage.ref()
      let newPost = Object.assign({}, post)
      return Promise.all( files.map( (file) => {
            let metadata = {
                'contentType': file.type
             };
            return storageRef.child('images/' + file.name).put(file, metadata)
            .then(function(snapshot) {
              const url = snapshot.metadata.downloadURLs[0];
              return url
              })
            }
          )
        )
        .then((photo_urls) => {
            newPost = Object.assign(newPost, {photo_urls: photo_urls})
            delete newPost.photos;
            return fetch('http://localhost:3004/posts', {
              method: 'post',
              body: JSON.stringify(newPost),
              headers: new Headers({
                'Content-Type': 'application/json'
              })
            })
          }
        )
        .then((response) => response.json())
        .then((results) => dispatch({
          type: "ADD_POST_SUCCESS",
          post: newPost
        }));
      };
}

export function removePost(idx, postId){
    return (dispatch) => {
      fetch('http://localhost:3004/posts/' + postId, {
          method: 'delete',
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        })
        .then((response) => response.json())
        .then((results) => dispatch({
          type: 'REMOVE_POST',
          idx,
        }))
        .then(
          () => {
            return fetch('http://localhost:3004/posts')
          } 
        )
        .then((response) => response.json())
        .then((posts) => dispatch({
          type: "LOAD_TAGS",
          posts
        }))
    };
}

export function updateTitle(idx, postId, post, title){
    const updated = Object.assign({}, post, {title: title})
    return (dispatch) => {
      fetch('http://localhost:3004/posts/' + postId, {
          method: 'put',
          body: JSON.stringify(updated),
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        })
        .then((response) => response.json())
        .then((posts) => dispatch({
          type: 'UPDATE_TITLE',
          idx,
          title
        }));
    };
}

export function updateContent(idx, postId, post, content){
    const updated = Object.assign({}, post, {content: content})
    return (dispatch) => {
      fetch('http://localhost:3004/posts/' + postId, {
          method: 'put',
          body: JSON.stringify(updated),
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        })
        .then((response) => response.json())
        .then((posts) => dispatch({
          type: 'UPDATE_CONTENT',
          idx,
          content
        }));
    };
}

export function updateTag(idx, postId, post, tags){
    const updated = Object.assign({}, post, {tags: tags})
    return (dispatch) => {
      fetch('http://localhost:3004/posts/' + postId, {
          method: 'put',
          body: JSON.stringify(updated),
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        })
        .then((response) => response.json())
        .then((posts) => dispatch({
          type: 'UPDATE_TAG',
          idx,
          tags
        }));
    };
}

export function toogleTitle(idx){
  return {
    type: 'TOOGLE_TITLE',
    idx
  }
}

export function toogleContent(idx){
  return {
    type: 'TOOGLE_CONTENT',
    idx
  }
}

export function toogleTag(idx){
  return {
    type: 'TOOGLE_TAG',
    idx
  }
}

export function removeTag(tag){
  return {
    type: 'REMOVE_TAG',
    tag
  }
}

export function addTags(tags){
  return {
    type: 'ADD_TAGS',
    tags
  }
}

export function loadTags() {
    return (dispatch) => {
      fetch('http://localhost:3004/posts')
        .then((response) => response.json())
        .then((posts) => dispatch({
          type: "LOAD_TAGS",
          posts
        }));
    };
  }