export function addPost(post){
  return {
    type: 'ADD_POST',
    post
  }
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