import React, { useState, useCallback } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeaderCard from "./components/header/HeaderCard";
import NavigationBar from './components/navBar'
import MovieList from "./components/movies/MovieList";
import Footer from './components/footer/Footer';
import ErrorBoundry from './components/ErrorBoundry';
import AddEditMovieModal from "./components/movies/AddEditMovieModal";

import { v4 as uuidv4 } from 'uuid';

import "./styles.css";

export default function App( {movies: initialMovies} ) {

  const [movies, setMovies] = useState(initialMovies);
  const [current, setCurrent] = useState({id:'',title:'',storyline:'', genres: []});

  const [showModal, setShowModal] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  function changeHeader(id){
    console.log("change details => " + !showDetails + "; " + id);
    let mov = movies.filter(movie => movie.id === id)[0]
    setCurrent(mov);

    //setShowDetails(!showDetails);
    setShowDetails(true);
  }

  function handleShowModal(show) {
    if (show !== showModal) {
      console.log(showModal);
      setShowModal(show);
    }
  }

  function handleUpsert(mov) {
    console.log('MovieList.handleAdd: ' + mov.id);

    const i = movies.findIndex(_item => _item.id === mov.id);

    if (i > -1) {
      movies[i] = mov;
    }
    else {
      mov.id = uuidv4();
      movies.push(mov);
    }

    setMovies(movies);
    setCurrent(null);
    setShowDetails(false);
    handleShowModal(false);

  }

  function handleForEdit(id) {
    console.log('MovieList.handleEdit: ' + id);
    let mov = movies.filter(movie => movie.id === id)[0]
    setCurrent(mov);
    handleShowModal(true);
  }


  function handleRemove(id) {
    console.log('MovieList.handleRemove: ' + id);
    setMovies(movies.filter(movie => movie.id !== id));
    setShowDetails(false);
  }

  return (

    <Container fluid >
      <HeaderCard details={showDetails} item={current} handleShowModal={handleShowModal}/><p />
      <NavigationBar /><p />
      <ErrorBoundry>
        <MovieList movies={movies}
          handleEdit={handleForEdit}
          handleRemove={handleRemove}
          showDetails={ changeHeader }>
        </MovieList>
      </ErrorBoundry>

      <Row>
        <Col>
          <Footer>
            <p className="text-center"> copyright (c) 2020</p>
          </Footer>
        </Col>
      </Row>

        <AddEditMovieModal
          onClick={() => handleShowModal(true)}
          show={showModal}
          movie={current}
          upsert={handleUpsert}
          onHide={() => handleShowModal(false)} />
    </Container>

  );
}
