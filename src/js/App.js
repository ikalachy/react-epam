import React, { useState, useCallback, useReducer } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeaderCard from "./components/header/HeaderCard";
import NavigationBar from './components/navBar'
import MovieList from "./components/movies/MovieList";
import Footer from './components/footer/Footer';
import ErrorBoundry from './components/ErrorBoundry';

import { v4 as uuidv4 } from 'uuid';

import "./styles.css";

export const ACTIONS = {
  ADD_MOVIE: 'add-movie',
  EDIT_MOVIE: 'edit-movie',
  REMOVE_MOVIE: 'remove-movie',

  SHOW_MOVIE_DETAILS: 'show-movie-details'
}


function reducer(movies, action) {

  switch (action.type) {
    case ACTIONS.ADD_MOVIE:
      return [...movies, newMovie(action.payload.movie)]
    case ACTIONS.REMOVE_MOVIE:
      return movies.filter(movie => movie.id !== action.payload.id)
    case ACTIONS.EDIT_MOVIE:
      return movies.map(movie => {
        if (movie.id === action.payload.movie.id) {
          return { ...action.payload.movie }
        }
        return movie
      })
    default:
      return movies

      console.log(movies)
  }
}

function newMovie(newMoview) {
  return {
    id: uuidv4(),
    title: '',
    imdbRating: 4.3,
    storyline: '',
    genres: [],
    description: '',
    year: 2006,
    posterurl: 'https://dummyimage.com/337x500/232323/FF'
  }
}

export default function App({ movies: initialMovies }) {

  { console.log('Render App') }

  const [movies, dispatch] = useReducer(reducer, initialMovies)
  const [currentMovie, setCurrentMovie] = useState([]);

  const handleShowDesc = useCallback((mov) => {
    setCurrentMovie(mov)
  }, []);



  /*useEffect(() => {
    fetch('http://my-json-server.typicode.com/ikalachy/api/movies/')
      .then(res => res.json())
      .then(
        (result) => {
          setState({
    
            movies: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setState({
            movies: initialMovies
          });
        }
      )
    //console.log(movies)
  })*/



  return (
    <Container fluid >
      <HeaderCard item={currentMovie} showDetails={handleShowDesc} dispatch={dispatch} /><p />
      <NavigationBar /><p />

      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>

    </Container>

  );
}
