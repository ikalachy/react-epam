import React, { Component } from "react";
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'

import 'holderjs';

export default function MovieCard(props) {

    const handleSelect = (e) => {
        console.log(e);
        //setValue(e)
    }

    return (
        <Card bg="dark" text="white" style={{ border: 0, borderRadius: 0}}>
            {console.log('Render card1')}
            <Dropdown variant="secondary" align="right" >
                <Dropdown.Toggle id={'toggle-' + props.movie.id} style={{
                    borderStyle: 'hidden',
                    borderRadius: '50%',
                    backgroundColor: '#343a40'
                }} />
                <Dropdown.Menu align="right" >
                    <Dropdown.Item as="button" onClick={() => props.handleEdit(props.movie.id)} >edit</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => props.handleRemove(props.movie.id)} >delete</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Card.Link href="#" >
                <Card.Img src={props.movie.posterurl} />
            </Card.Link>
            <Card.Body>
                <Card.Title >{props.movie.title}</Card.Title>
                <Card.Text>
                    {props.movie.year}
                </Card.Text>
                <Button variant="primary" onClick={() => props.showDetails(props.movie.id)} >View more</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{props.movie.genres.join(' ,')}</small>
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