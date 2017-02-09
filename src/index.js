import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { Provider } from 'react-redux'
import store from './store'

const router = (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(router, document.getElementById('root'));
