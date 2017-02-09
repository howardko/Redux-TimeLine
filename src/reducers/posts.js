const _add_a_post = (posts, post) =>{

    let id = +new Date()
    let date = new Date();
    let time = (date.getMonth() + 1) + "/" + date.getDate() + ":" + date.getHours();
    let detailedLink = "http://localhost/post/" + id
    let imageFile = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg"
    let imageAlt = "location"
    let newPost = Object.assign({}, {id, time, detailedLink, imageFile, imageAlt}, post)
    const newPosts = [newPost, ...posts ]
    return newPosts
}

const _toogle_title = (posts, index) => {

    let newPosts = [...posts]
    newPosts[index].isTitleEditing = !newPosts[index].isTitleEditing
    return newPosts
}

const _toogle_content = (posts, index) => {
    let newPosts = [...posts]
    newPosts[index].isContentEditing = !newPosts[index].isContentEditing
    return newPosts
}

const _update_content = (posts, index, content) => {
    const newPosts = [...posts]
    newPosts[index].content = content
    newPosts[index].isContentEditing = false
    return newPosts
}

const _update_title = (posts, index, title) => {
    const newPosts = [...posts]
    newPosts[index].title = title
    newPosts[index].isTitleEditing = false
    return newPosts
}

function posts(state = [], action){
  switch(action.type){
    case 'ADD_POST':
      return _add_a_post(state, action.post)  
    case 'REMOVE_POST':
      console.log('remove posts')
      return state
    case 'UPDATE_TITLE':
      return _update_title(state, action.idx, action.title)
    case 'UPDATE_CONTENT':
      return _update_content(state, action.idx, action.content)
    case 'TOOGLE_TITLE':
      return _toogle_title(state, action.idx)
    case 'TOOGLE_CONTENT':
      return _toogle_content(state, action.idx)
    default:
      return state
  }
}

export default posts