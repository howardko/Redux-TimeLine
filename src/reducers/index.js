import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import posts from './posts'
import edit from './edit'
import tags from './tags'

const rootReducer = combineReducers({posts, edit, tags, routing: routerReducer})

export default rootReducer