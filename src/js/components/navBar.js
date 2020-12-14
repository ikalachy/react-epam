import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

class NavigationBar extends React.Component {

    render() {

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">All</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">DUCUMENTARY</Nav.Link>
                        <Nav.Link href="#comedy">COMEDY</Nav.Link>
                        <Nav.Link href="#horror">HORROR</Nav.Link>
                        <Nav.Link href="#crime">CRIME</Nav.Link>
                    </Nav>

                    <Nav>
                        <Navbar.Text >SORT BY: </Navbar.Text> <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <NavDropdown title="RELEASE DATE" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>);
    }
}

export default NavigationBar