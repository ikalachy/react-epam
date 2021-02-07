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

import loadable from '@loadable/component'

//const MovieDetails = loadable(() => import('./components/header/MovieDetails'))
import MovieDetails from "./components/header/MovieDetails";

import PageNotFount from "./404";
import SearchResults from "./containers/SearchResults";

//const PageNotFount = lazy(() => import('./404'))
//const MovieDetails = lazy(() => import('./components/header/MovieDetails'))
//const SearchResults = lazy(() => import('./containers/SearchResults'))


export default function App() {

  { console.log('Render App') }

  const modalIsOpen = useSelector(state => state.modal.modalProps.open)
  //     <Route path="/*" component={PageNotFount} />

  return (

    <Container className="container-sm" fluid >

      <Switch>
        <Route path="/" exact render={() =>
          <>
            {console.log("route 1")}
            <Header />
            <NavigationBar /><p />
            <VisibleMovieList />
          </>
        } />

        <Route path="/movie/:id" render={({ match }) =>
          <>
            {console.log("route 2")}
            <MovieDetails match={match} />
            <NavigationBar /><p />
            <VisibleMovieList />
          </>
        } />

        <Route path="/search/:query" exact render={({ match }) =>
          <>
            {console.log("route 3")}
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




  );
}
