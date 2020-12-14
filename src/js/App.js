import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeaderCard from "./components/header/HeaderCard";
import SearchCard from "./components/search/searchCard";
import NavigationBar from './components/navBar'
import MovieList from "./components/movies/MovieList";
import Footer from './components/footer/Footer';
import ErrorBoundry from './components/ErrorBoundry';


import "./styles.css";

export default function App_App() {
  return (

    <Container fluid > 
      <HeaderCard message="FIND YOUR MOVIE" />
      <p/>
      <NavigationBar/>
      <p/>
      <ErrorBoundry>
        <MovieList></MovieList>
      </ErrorBoundry>

      <Row>
        <Col>
          <Footer>
            <p className="text-center"> copyright (c) 2020</p>
          </Footer>
        </Col>
      </Row>

    </Container>

  );
}
