import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import App from "./App";

import rootReducer from './reducers'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  movies: [],
  visibilityFilter: {
    filter: 'SHOW_ALL',
    value: ''
  },
  sort: {
    sortBy: 'releaseDate',
    order: 'ASC'
  },
  modal: {
    modalType: null,
    modalProps: {
      open: false
    }
  }
}

//code to setup redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)))
// &&
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const rootElement = document.getElementById("root");

console.log('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
