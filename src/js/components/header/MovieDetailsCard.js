import React from "react";
import Card from 'react-bootstrap/Card';
import SearchCard from "../search/searchCard";

import overlayimg from "./img/netflix-menu1.png"

export default function MovieDetailsCard() {


    return (
        <Card className="bg-dark " text="danger">
            <Card.Img src={overlayimg} style={{ filter: 'blur(6px)' }} alt="Card image" />
            
            <Card.ImgOverlay>
            <Card.Img  src="holder.js/100px400?bg=343a40" />
                <Card.Title as="h4" ><strong >netflix</strong>roulette</Card.Title>
                <Card.Text className="text-right">Movie details card

                </Card.Text>
                <Card.Body>
                    <SearchCard />
                </Card.Body>
            </Card.ImgOverlay>
        </Card>
    );

}
