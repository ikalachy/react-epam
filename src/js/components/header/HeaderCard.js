import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SearchCard from "../search/searchCard";
import overlayimg from "./img/netflix-menu1.png"

export default function HeaderCard(props) {
    return (

        <Card className="bg-dark" text="danger">
            <Card.Img src={overlayimg} style={{ filter: 'blur(6px)'}} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title as="h4" ><strong >netflix</strong>roulette</Card.Title>
                <Card.Text className="text-right">
                    <Button variant="" style={{ borderStyle: 'hidden', background: 'rgba(85, 85, 85, 0.7)', color: '#dc3545' }} size="lg">
                        <strong >+ ADD MOVIE</strong>
                    </Button>
                </Card.Text>
                <Card.Body>
                    <SearchCard />
                </Card.Body>
            </Card.ImgOverlay>
        </Card>
    )
}