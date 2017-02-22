const _add_a_post = (posts, post) =>{
    const newPosts = [post, ...posts ]
    return newPosts
}

const _remove_a_post = (posts, index) => {
    const newPosts = [...posts.slice(0, index), ...posts.slice(index + 1)]
    return newPosts
}

const _remove_a_image = (posts, postId, file_index) => {
    const idx = posts.findIndex((post) => post.id === postId)
    if (idx === -1) return posts

    if ( posts[idx].photo_urls && 
          posts[idx].file_names &&
          file_index > -1 && 
          file_index < posts[idx].photo_urls.length){
      const photo_urls = [...posts[idx].photo_urls.slice(0, file_index), 
                          ...posts[idx].photo_urls.slice(file_index +1)]
      const file_names = [...posts[idx].file_names.slice(0, file_index),
                          ...posts[idx].file_names.slice(file_index +1)]
      const post =  {...posts[idx], photo_urls, file_names}
      const newPosts = [...posts.slice(0, idx), post, ...posts.slice(idx + 1)]

      return newPosts
    }
    else return posts
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
      return _remove_a_post(state, action.idx)
    case 'REMOVE_IMAGE':
      return _remove_a_image(state, action.postId, action.file_index)
    case 'UPDATE_TITLE':
      return _update_title(state, action.idx, action.title)
    case 'UPDATE_CONTENT':
      return _update_content(state, action.idx, action.content)
    default:
      return state
  }
}

export default posts