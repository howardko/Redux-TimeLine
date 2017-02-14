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
      fetch('http://localhost:3004/posts', {
          method: 'post',
          body: JSON.stringify(post),
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        })
        .then((response) => response.json())
        .then((posts) => dispatch({
          type: "ADD_POST_SUCCESS",
          post
        }));
    };
}

export function removePost(idx){
  return {
    type: 'REMOVE_POST',
    idx
  }
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