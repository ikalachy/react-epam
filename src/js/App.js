import React from "react";
import HeaderCard from "./components/header/HeaderCard";
import MovieList from "./components/movies/MovieList";
import Footer from './components/footer/Footer'
import ErrorBoundry from './components/ErrorBoundry'

import "./styles.css";

export default function App_App() {
  return (
    <main className="App">
      <HeaderCard message="Hello, World" />
      <ErrorBoundry>
        <MovieList></MovieList>
      </ErrorBoundry>
      <Footer>
        <p> copyright (c) 2020</p>
      </Footer>
    </main>
  );
}
