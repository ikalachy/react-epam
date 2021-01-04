import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import movies from './movies.json';

import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App movies={movies}/>
  </React.StrictMode>,
  rootElement
);
