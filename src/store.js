import { createStore } from 'redux'

import posts from './data/posts'
import rootReducer from './reducers/index'
const defaultState = {
  posts
}

const store = createStore(rootReducer, defaultState)

export default store