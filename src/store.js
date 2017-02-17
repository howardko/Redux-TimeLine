import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const store = createStore(rootReducer, applyMiddleware(thunk))
export const history = syncHistoryWithStore(browserHistory, store)

export default store