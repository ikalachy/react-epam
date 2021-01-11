import React, { useState } from "react";
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ModalWithButton from '../movies/modal-with-button';

import { ACTIONS } from '../../App'

export default function MovieCard({ dispatch, movie, ...props }) {

    { console.log('Render card id: ' + movie.id + ' title: ' +  movie.title) }


    return (
        <>
            <Card bg="dark" text="white" style={{ border: 0, borderRadius: 0 }}>
                <ModalWithButton title="edit" item={movie} action={ACTIONS.EDIT_MOVIE} dispatch={dispatch} />
                <Card.Link href="#" >
                    <Card.Img src={movie.posterurl} />
                </Card.Link>
                <Card.Body>
                    <Card.Title >{movie.title}</Card.Title>
                    <Card.Text>
                        {movie.year}
                    </Card.Text>
                    <Button variant="primary" onClick={() => props.showDetails(movie.id)} >View more</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{movie.genres.join(' ,')}</small>
                </Card.Footer>
            </Card>
        </>
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