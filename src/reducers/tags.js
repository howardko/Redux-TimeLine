
import * as utility from '../utility/utility.js'

function _load_tags(posts){
    return (posts.length > 0) 
            ? posts.map((post) => (post.tags || [])).reduce((pre, curr) => (utility.union(pre, curr)))
            : []
  }

function _add_tags(tags, added){
    return utility.union(tags, added)
  }

function tags(state = [], action){
  switch(action.type){
    case 'LOAD_TAGS':
      return _load_tags(action.posts)
    case 'ADD_TAGS':
      return _add_tags(state, action.tags)
    case 'REMOVE_TAG':
      const tags = state.filter((tag) => (tag !== action.tag))
      return tags
    default:
      return state
  }
}

export default tags