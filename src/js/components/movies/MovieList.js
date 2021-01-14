import React, { useMemo } from "react";
import MovieCard from './MovieCard';
import CardColumns from 'react-bootstrap/CardColumns'

export default function MovieList({ dispatch, showDetails, movies }) {

    { console.log('Render MovieList') }

    const MovieListElements = useMemo(() => {
        return movies.map((movie) => (
            <MovieCard showDetails={showDetails}
                key={movie.id}
                movie={movie}
                dispatch={dispatch}
            />))}, [dispatch, showDetails, movies])

    return (
        <CardColumns>
            { MovieListElements}
        </CardColumns>
    )
}
