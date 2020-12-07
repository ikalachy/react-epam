import React, { Component } from "react";
import MovieCard from './MovieCard'


let movies = [
    {
        title: 'Ricky Jones',
        description: 'Science',
        id: 'mv1'
    },
    {
        title: 'Tittanic',
        description: 'something about big ship',
        id: 'mv2'
    },
    {
        title: 'Amazonka',
        description: 'Somethong about ',
        id: 'mv3'
    },
    {
        title: 'Amazonka',
        description: 'Somethong about ',
        id: 'mv3'
    },
    {
        title: 'Amazonka',
        description: 'Somethong about ',
        id: 'mv3'
    },
    {
        title: 'Amazonka',
        description: 'Somethong about ',
        id: 'mv3'
    },
]

export default function MovieList() {
    return (
        <>
            {movies.map((movie) => (
                <MovieCard
                    title={movie.title}
                    description={movie.description}
                    key={movie.id}
                />
            ))}
        </>
    )
}
