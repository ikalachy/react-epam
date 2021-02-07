import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { Link } from "react-router-dom";

const MovieDetails = ({ match }) =>
 {

    console.log('movie details ')

    const {id}  = match.params

    const item = useSelector(state =>
      state.movies.find(mv => mv.id === id)
    )

    if (!item) {
        return ( <p>Empty</p>  )
      }
 
    const buttonStyle = {
        borderStyle: 'hidden',
        background: 'rgba(85, 85, 85, 0.7)',
        color: '#dc3545',
        position: 'absolute', top: 20, right: 30
    }


    const dispatch = useDispatch()

    return (
        <Card className="bg-dark " >
            <Card.Body>
                <Link style={buttonStyle} to={`/`}><strong >X</strong></Link>
                <Card.Title as="h4" className="mb-4 text-danger" >
                    <strong >netflix</strong>roulette
                </Card.Title>

                <Row className="ml-1">
                    <Col>
                        <Card.Img src={item.posterurl} />
                    </Col>
                    <Col className="mb-4">
                        <Card.Title as="h2" className="mb-4 text-white-50"><strong >{item.title}</strong>
                            <Badge variant="success">{item.imdbRating}</Badge>
                        </Card.Title>
                        <Card.Subtitle className="mb-4 text-muted">{item.genres ? item.genres.join(' ,') : ''}</Card.Subtitle>
                        <Card.Text as="h4" className="mb-3 text-left text-danger">
                            {item.year}  -   154 min
                            </Card.Text>
                        <Card.Text className="text-left text-white">
                            {item.storyline}
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>)


}

export default MovieDetails
