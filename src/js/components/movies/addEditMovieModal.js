import React, { useState, useRef, useDebugValue }  from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

import './movies.css'

function AddEditMovieModal(props) {

    console.log("AddEditMovieModal");

    const form = useRef(null)

    const [movie, setMovie] = useState({id:'',title:'',storyline:'',genres:[]});
    useDebugValue(movie ? movie : 'Undefined');

    function handleChange(e){
        console.log("handleChange" + e);
        //e.preventDefault();
       setMovie( (movie) => ({
            ...movie, 
            genres: movie.genres.concat(e.target.value)
        }));
    }

    function onShow(){
        setMovie(props.movie);
        console.log("onShow" + props.movie);
        //setMoview(props.movie);

    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("FormSubmit" + movie);
        props.upsert(movie);
    }

    return (
        <Modal
            {...props}
            onShow={onShow}
            size="lg"
            style={{ backgroundColor: 'var(--gray-dark)', color: '#dc3545' }}
            aria-labelledby="contained-modal-title-vcenter"
            //style={{background-color: 'var(--gray-dark)'}}
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {movie.id.length > 0 ? 'EDIT MOVIE' : 'ADD MOVIE'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form ref={form} size="lg" variant="dark" onSubmit={handleSubmit}>
                    <Form.Control type="hidden" value={movie.id} />
                    <Form.Group controlId="formGroupTitle">
                        <Form.Label size="lg">TITLE</Form.Label>
                        <Form.Control type="text"   
                            onChange={e => setMovie( (movie) => ({
                                ...movie, 
                                title: e.target.value 
                            }))} 
                            value={movie.title}   />
                    </Form.Group>
                    <Form.Group controlId="formGroupReleaseDate">
                        <Form.Label>RELEASE DATE</Form.Label>
                        <Form.Control type="date" placeholder="Select Date" />
                    </Form.Group>
                    <Form.Group controlId="formGroupGenre" name="genre">
                        <Form.Label>GENRE</Form.Label>
                        <Form.Control as="select"    
                            onChange={(e)=> handleChange(e)} 
                            multiple={true}
                            value={movie.genres} >
                                <option>Action</option>
                                <option>Comedy</option>
                                <option>Drama</option>
                                <option>Thriller</option>
                                <option>Western</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formGroupOverview">
                        <Form.Label>DESCRIPTION</Form.Label>
                        <Form.Control type="text" placeholder="Overview here"                            
                           onChange={e => setMovie( (movie) => ({
                            ...movie, 
                            storyline: e.target.value 
                        }))} 
                        value={movie.storyline}   />
                    </Form.Group>

                    <Button variant="outline-danger" type="button">
                        RESET
                    </Button>

                    <Button variant="danger" type="submit" >
                        SUBMIT
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );


}

export default AddEditMovieModal