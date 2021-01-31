import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import SearchCard from "../search/searchCard";
import Button from 'react-bootstrap/Button';

//ACTIONS
import { showModal } from '../../actions/actions'
import overlayimg from "./img/netflix-menu1.png"


export default function HeaderCard({ item }) {

    const blurStyle = {
        filter: 'blur(6px)'
    }

    const addMovieButtonStyle = {
        borderStyle: 'hidden',
        background: 'rgba(85, 85, 85, 0.7)',
        color: '#dc3545',
        position: 'absolute', top: 20, right: 30
    }

    const buttonStyle = {
        borderStyle: 'hidden',
        background: 'rgba(85, 85, 85, 0.7)',
        color: '#dc3545',
        position: 'absolute', top: 20, right: 30
    }


    const dispatch = useDispatch()

    return (
        <Card className="bg-dark " text="danger">
            <Card.Img src={overlayimg} style={blurStyle} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title as="h2" >
                    <strong >netflix</strong>roulette
                </Card.Title>

                <Button
                    onClick={() => dispatch(showModal(item.id))}
                    style={addMovieButtonStyle}
                    size="lg">
                    <strong >ADD</strong>
                </Button>

                <Card.Body>
                    <SearchCard />
                </Card.Body>

            </Card.ImgOverlay>
        </Card>)


}
