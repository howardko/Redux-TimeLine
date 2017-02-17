import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main'
import TimeLine from './components/TimeLine'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, {history} from './store'

const router = (
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={Main}>
        <IndexRoute component={TimeLine}></IndexRoute>
        <Route path="/:filter" component={TimeLine} ></Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));
