import React, { useEffect } from "react";
import MovieCard from './MovieCard';
import CardColumns from 'react-bootstrap/CardColumns'

export default function MovieList({ dispatch, movies, ...props }) {

    { console.log('Render MovieList') }


    return (
        <CardColumns>
            {
                movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        dispatch={dispatch}
                    />
                ))
            }
        </CardColumns>
    );
}
