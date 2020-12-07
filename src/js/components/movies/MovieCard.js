import React, { Component } from "react";
import PropTypes from 'prop-types'

import './css/movieCard.css'

export default function MovieCard(props) {

    return (
        <div className="MovieCard">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )

}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

MovieCard.defaultProps = {
    title: 'Just Default Title',
    description: 'Default description'
}