import { combineReducers } from 'redux'

import posts from './posts'
import edit from './edit'

const rootReducer = combineReducers({posts, edit})

export default rootReducer