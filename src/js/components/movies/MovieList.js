import React, { useState } from "react";
import MovieCard from './MovieCard';
import CardColumns from 'react-bootstrap/CardColumns'



export default function MovieList(props) {

    return (
        <CardColumns>
            {props.movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    handleEdit={ ()=> props.handleEdit(movie.id)}
                    handleRemove={()=> props.handleRemove(movie.id)}
                    showDetails={()=> props.showDetails(movie.id)}
                />
            ))}
        </CardColumns>
    );
}
