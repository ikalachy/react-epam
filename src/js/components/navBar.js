import React, { } from "react"
import { useDispatch } from 'react-redux'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'


function NavigationBar() {

    const GENRES = ['Documentary', 'Comedy', 'Horror', 'Crime']


    const dispatch = useDispatch()

    const handleFilterByGenre = (e) => {
        dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_GENRE', value: e.slice(1) })
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand
                    onClick={
                        () => dispatch(
                            { type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL', value: '' } )}
                    href="#home">All</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {
                            GENRES.map(genre =>
                                <Nav.Link key={genre} onSelect={(e) => handleFilterByGenre(e)}
                                    href={'#' + genre}>{genre.toUpperCase()}
                                </Nav.Link>)
                        }

                    </Nav>

                    <Nav>
                        <Navbar.Text >SORT BY: </Navbar.Text> <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <NavDropdown title="RELEASE DATE" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#ASC">Asc</NavDropdown.Item>
                            <NavDropdown.Item href="#DESC">Desc</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}


export default NavigationBar