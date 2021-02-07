import React from 'react'
import { hydrate } from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import rootReducer from './reducers'

import  { BrowserRouter as Router } from "react-router-dom";
import { loadableReady } from '@loadable/component'
import 'bootstrap/dist/css/bootstrap.min.css';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk))



loadableReady(() => {
  hydrate(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
  )
})

