import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import posts from './posts'
import edit from './edit'
import filter from './filter'

const rootReducer = combineReducers({posts, edit, filter, routing: routerReducer})

export default rootReducer