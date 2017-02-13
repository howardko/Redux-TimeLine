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

export function updateTitle(idx, title){
  return {
    type: 'UPDATE_TITLE',
    idx,
    title
  }
}

export function updateContent(idx, content){
  return {
    type: 'UPDATE_CONTENT',
    idx,
    content
  }
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