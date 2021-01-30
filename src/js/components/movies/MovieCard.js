import React from "react";
import {  useDispatch } from "react-redux";
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { showModal } from '../../actions/actions'
import { deleteMovieApi } from '../../reducers/movies'

export default function MovieCard({ showDetails, removeMovie, movie, ...props }) {

    //{ //console.log('Render card id: ' + movie.id + ' title: ' +  movie.title) }
    //{ console.log('Render card'}
    // be called when the form is submitted
    const menuButtonStyle = {
        borderStyle: 'hidden',
        borderRadius: '50%',
        backgroundColor: '#343a40'
    }
    const cardStyle = {
        border: 0, borderRadius: 0
    }


    const dispatch = useDispatch()

    function handleRemove(id){
        dispatch(deleteMovieApi(movie.id))
    }

    return (
        <>
            <Card key={'movie-card-' + movie.id} bg="dark" text="white" style={cardStyle}>

                <Dropdown  variant="secondary" align="right" >
                    <Dropdown.Toggle style={menuButtonStyle} />
                    <Dropdown.Menu align="right" >
                        <Dropdown.Item size="lg" as="button" onClick={() => dispatch(showModal(movie.id))} >edit</Dropdown.Item>
                        <Dropdown.Item size="lg" as="button" onClick={() => handleRemove(movie.id)} >delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Card.Link href="#" >
                    <Card.Img src={movie.posterurl} />
                </Card.Link>
                <Card.Body>
                    <Card.Title >{movie.title}</Card.Title>
                    <Card.Text>
                        {movie.year}
                    </Card.Text>
                    <Button variant="primary" onClick={() => showDetails(movie.id)} >View more</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{movie.genres ? movie.genres.join(' ,') : ''}</small>
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