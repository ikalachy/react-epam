import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'

import { ACTIONS } from '../../App'

import './movies.css'

function ModalWithButton({ title, action, item, dispatch,  ...props }) {

    console.log("ModalWithButton");

    const [isOpen, setIsOpen] = useState(false);
    const [holder, setHolder] = useState( item ? item : {});

    /**
     * Handle form submit 
     * @param {event} event 
     */
    function handleSubmit(event) {
        event.preventDefault();
        console.log("FormSubmit" + holder);

        let actionType = action ? action : ACTIONS.ADD_MOVIE
        
        dispatch( { type: actionType, payload: { movie: holder } })
        setIsOpen(false);
        setHolder({})
    }

    const handleRemove = (id) => {
        console.log('delete movie with id: ' + id)
        //setIsOpen(false)
        dispatch({ type: ACTIONS.REMOVE_MOVIE, payload: { id: id } })
    }

    function handleGenres(e){
       //holder.genres = Array.from(e.target.selectedOptions, option => option.value)
       setHolder((holder) => ({
            ...holder,
            genres: Array.from(e.target.selectedOptions, option => option.value)
        }))
    }

    return (
        <>
            {action === ACTIONS.EDIT_MOVIE ? (

                <Dropdown variant="secondary" align="right" >
                <Dropdown.Toggle id={'toggle-' + holder.id} style={{
                    borderStyle: 'hidden',
                    borderRadius: '50%',
                    backgroundColor: '#343a40'
                }} />
                <Dropdown.Menu align="right" >
                    <Dropdown.Item as="button" onClick={() => setIsOpen(!isOpen)} >edit</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => handleRemove(holder.id)} >delete</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>

            ) :  (
                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        borderStyle: 'hidden',
                        background: 'rgba(85, 85, 85, 0.7)',
                        color: '#dc3545',
                        position: 'absolute', top: 20, right: 30
                    }}
                    size="lg">
                    <strong >{title}</strong>
                </Button>)}
            <Modal
                {...props}
                show={isOpen}
                onHide={() => setIsOpen(!isOpen)}
                size="lg"
                style={{ backgroundColor: 'var(--gray-dark)', color: '#dc3545' }}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form size="lg" variant="dark" onSubmit={handleSubmit}>
                        <Form.Control type="hidden" value={holder.id} />

                        <Form.Group controlId="formGroupTitle">
                            <Form.Label size="lg">TITLE</Form.Label>
                            <Form.Control type="text"
                                onChange={e => setHolder((holder) => ({
                                    ...holder,
                                    title: e.target.value
                                }))}
                                value={holder.title} />
                        </Form.Group>
                        <Form.Group controlId="formGroupPosterUrl">
                            <Form.Label size="lg">POSTER URL</Form.Label>
                            <Form.Control type="text"
                                onChange={e => setHolder((holder) => ({
                                    ...holder,
                                    posterurl: e.target.value
                                }))}
                                value={holder.posterurl} />
                        </Form.Group>
                        <Form.Group controlId="formGroupReleaseDate">
                            <Form.Label>RELEASE DATE</Form.Label>
                            <Form.Control type="date" placeholder="Select Date" />
                        </Form.Group>
                        <Form.Group controlId="formGroupGenre" name="genre">
                            <Form.Label>GENRE</Form.Label>
                            <Form.Control as="select"
                                onChange={(e) => handleGenres(e)}
                                multiple={true}
                                value={holder.genres} >
                                <option >Action</option>
                                <option>Comedy</option>
                                <option>Drama</option>
                                <option>Thriller</option>
                                <option>Western</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formGroupOverview">
                            <Form.Label>STORYLINE</Form.Label>
                            <Form.Control type="text" placeholder="Overview here"
                                onChange={e => setHolder((holder) => ({
                                    ...holder,
                                    storyline: e.target.value
                                }))}
                                value={holder.storyline} />
                        </Form.Group>

                        <Button variant="danger" type="submit" >SUBMIT</Button>{' '}
                        <Button variant="outline-danger" onClick={() => setIsOpen(!isOpen)} type="button">RESET</Button>
                       
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );


}

export default ModalWithButton