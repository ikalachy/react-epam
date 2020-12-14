import React, { Component } from "react";
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Dropdown from 'react-bootstrap/Dropdown'

import 'holderjs';

import './css/movieCard.css'

export default function MovieCard(props) {
    return (
        <Card bg="dark" text="white" style={{ border: 0, borderRadius: 0 }}>
            <Dropdown variant="secondary" align="right" >
                <Dropdown.Toggle id={'toggle-' + props.id} style={{ 
                    borderStyle: 'hidden',
                    borderRadius: '50%',
                    backgroundColor:'#343a40'}}/>
                <Dropdown.Menu align="right" >
                    <Dropdown.Item>edit</Dropdown.Item>
                    <Dropdown.Item>delete</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> <Card.Img src="holder.js/100px400?bg=343a40" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description} - 2003
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{props.genre}</small>
            </Card.Footer>
        </Card>
    )

}




MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

MovieCard.defaultProps = {
    title: 'Just Default Title',
    description: 'Default description',
    genre: 'Action'
}