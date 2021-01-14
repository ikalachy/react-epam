import React, { useState, useContext } from "react";
import Card from 'react-bootstrap/Card';
import SearchCard from "../search/searchCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ModalWithButton from '../movies/modal-with-button';


import overlayimg from "./img/netflix-menu1.png"
import 'holderjs';


export default function HeaderCard({ item, dispatch, showDetails, ...props }) {

    const blurStyle = {
        filter: 'blur(6px)'
    }

    const buttonStyle = {
        borderStyle: 'hidden',
        background: 'rgba(85, 85, 85, 0.7)',
        color: '#dc3545',
        position: 'absolute', top: 20, right: 30
    }


    if (item.id) {
        return (
            <Card className="bg-dark " >
                <Card.Body>
                    <Button onClick={() => showDetails([])} style={buttonStyle} size="lg">
                        <strong >X</strong>
                    </Button>
                    <Card.Title as="h4" className="mb-4 text-danger" ><strong >netflix</strong>roulette</Card.Title>

                    <Row className="ml-1">
                        <Col>
                            <Card.Img src={item.posterurl} />
                        </Col>
                        <Col className="mb-4">
                            <Card.Title as="h2" className="mb-4 text-white-50"><strong >{item.title}</strong>
                                <Badge variant="success">{item.imdbRating}</Badge>
                            </Card.Title>
                            <Card.Subtitle className="mb-4 text-muted">{item.genres.join(',')}</Card.Subtitle>
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
    } else {
        return (
            <Card className="bg-dark " text="danger">
                <Card.Img src={overlayimg} style={blurStyle} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title as="h4" ><strong >netflix</strong>roulette</Card.Title>
                    <ModalWithButton title="+ ADD MOVIE" dispatch={dispatch} />
                    <Card.Body>
                        <SearchCard />
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>)
    }

}
