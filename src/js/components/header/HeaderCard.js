import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import SearchCard from "../search/searchCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import overlayimg from "./img/netflix-menu1.png"
import 'holderjs';

export default function HeaderCard(props) {

    if (props.details) {
        return (
            <Card className="bg-dark " >
                <Card.Body>
                    <Card.Title as="h4" className="mb-4 text-danger" ><strong >netflix</strong>roulette</Card.Title>
                    <Row className="ml-1">
                        <Col>
                            <Card.Img src={props.item.posterurl}/>
                        </Col>
                        <Col className="mb-4">
                            <Card.Title as="h2" className="mb-4 text-white-50"><strong >{props.item.title}</strong>   <Badge variant="success">{props.item.imdbRating}</Badge></Card.Title>
                            <Card.Subtitle className="mb-4 text-muted">{props.item.genres.join(',')}</Card.Subtitle>
                            <Card.Text as="h4" className="mb-3 text-left text-danger">
                                {props.item.year}  -   154 min
                            </Card.Text>
                            <Card.Text className="text-left text-white">
                                {props.item.storyline}
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>)
    } else {
        return (
            <Card className="bg-dark " text="danger">
                <Card.Img src={overlayimg} style={{ filter: 'blur(6px)' }} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title as="h4" ><strong >netflix</strong>roulette</Card.Title>
                    <Button
                        onClick={() => props.handleShowModal(true)}
                        style={{
                            borderStyle: 'hidden',
                            background: 'rgba(85, 85, 85, 0.7)',
                            color: '#dc3545',
                            position: 'absolute', top: 20, right: 30
                        }}
                        size="lg">
                        <strong >+ ADD MOVIE</strong>
                    </Button>
                    <Card.Body>
                        <SearchCard />
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>)
    }

}
