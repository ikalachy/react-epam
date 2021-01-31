import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavigationBar from './components/navBar'
import MoviesModal from './components/movies/modal';
import VisibleMovieList from "./containers/VisibleMovieList";
import Footer from './components/footer/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./styles.css";
import Header from "./containers/Header";
import MovieDetails from "./components/header/MovieDetails";
import PageNotFount from "./404";
import SearchResults from "./containers/SearchResults";


export default function App() {

  { console.log('Render App') }

  const modalIsOpen = useSelector(state => state.modal.modalProps.open)
  //     <Route path="/*" component={PageNotFount} />

  return (
    <Router>
      <Container fluid >

        <Switch>
          <Route path="/" exact render={() =>
            <>
              <Header />
              <NavigationBar /><p />
              <VisibleMovieList />
            </>
          } />

          <Route path="/movie/:id" render={({ match }) =>
            <>
              <MovieDetails match={match} />
              <NavigationBar /><p />
              <VisibleMovieList />
            </>
          } />

          <Route path="/search/:query" exact render={({ match }) =>
            <>
              <Header />
              <NavigationBar /><p />
              <SearchResults match={match} />
            </>
          } />

          <Route path="/*" component={PageNotFount} />
        </Switch>

        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>

        {modalIsOpen
          ? <MoviesModal isOpen={modalIsOpen} />
          : ''}
      </Container>

    </Router>


  );
}
