const _add_a_post = (posts, post) =>{
    const newPosts = [post, ...posts ]
    return newPosts
}

const _update_content = (posts, index, content) => {
    const newPosts = [...posts]
    newPosts[index].content = content
    return newPosts
}

const _update_title = (posts, index, title) => {
    const newPosts = [...posts]
    newPosts[index].title = title
    return newPosts
}

const _update_tag = (posts, index, tags) => {
    const newPosts = [...posts]
    newPosts[index].tags = tags
    return newPosts
}

function posts(state = [], action){
  switch(action.type){
    case 'FETCH_POSTS_SUCCESS':
      return action.posts  
    case 'ADD_POST_SUCCESS':
      return _add_a_post(state, action.post)  
    case 'REMOVE_POST':
      console.log('remove posts')
      return state
    case 'UPDATE_TITLE':
      return _update_title(state, action.idx, action.title)
    case 'UPDATE_CONTENT':
      return _update_content(state, action.idx, action.content)
    default:
      return state
  }
}

export default posts