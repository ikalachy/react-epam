import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MovieForm from './movieForm'
import { hideModal } from '../../actions/actions'

import { ACTIONS } from '../../App'

import './movies.css'

export default function MovieModal() {

    const editMode    = useSelector(state => state.modal.modalProps.context)
    const isModalOpen = useSelector(state => state.modal.modalProps.open)

    { console.log('Render modal ' + (!editMode ? 'ADD MOVIE' : 'EDIT MOVIE')) }

    const dispatch = useDispatch()

    return (
        <>
            <Modal
                show={isModalOpen}
                onHide={() => dispatch(hideModal(true))}
                size="lg"
                style={{ backgroundColor: 'var(--gray-dark)', color: '#dc3545' }}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {!editMode ? 'ADD MOVIE' : 'EDIT MOVIE'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MovieForm id={editMode} ></MovieForm>
                </Modal.Body>
            </Modal>
        </>
    )
}