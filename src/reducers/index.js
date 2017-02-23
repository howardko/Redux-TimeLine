import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import posts from './posts'
import edit from './edit'
import tags from './tags'
import user from './user'

const rootReducer = combineReducers({posts, edit, tags, user, routing: routerReducer})

export default rootReducer