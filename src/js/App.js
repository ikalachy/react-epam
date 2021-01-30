import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavigationBar from './components/navBar'
import MoviesModal from './components/movies/modal';
import VisibleMovieList from "./containers/VisibleMovieList";
import Footer from './components/footer/Footer';
import ErrorBoundry from './components/ErrorBoundry';

import "./styles.css";
import Header from "./containers/Header";


export default function App() {

  { console.log('Render App') }

  const modalIsOpen = useSelector(state => state.modal.modalProps.open)


  return (
    <Container fluid >
      <Header />
      <NavigationBar /><p />
      <ErrorBoundry>
        <VisibleMovieList />
      </ErrorBoundry>

      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>

      { modalIsOpen
        ? <MoviesModal isOpen={modalIsOpen} />
        : ''}
    </Container>

  );
}
