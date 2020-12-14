import React, { Component } from "react";
import MovieCard from './MovieCard';
import Row from 'react-bootstrap/Row';
import CardColumns from 'react-bootstrap/CardColumns'

let movies = [
    {
        title: 'Ricky Jones',
        description: 'Science',
        id: 'mv1',
        genre: 'Action'
    },
    {
        title: 'Tittanic',
        description: 'something about big ship',
        id: 'mv2'
        ,
        genre: 'Oscar winning Movie'
    },
    {
        title: 'Amazonka',
        description: 'Somethong about ',
        id: 'mv3',
        genre: 'Drama'
    },
    {
        title: 'Interstellar',
        description: 'Somethong about ',
        id: 'mv4',
        genre: 'Action'
    },
    {
        title: 'Avengers',
        description: 'Somethong about ',
        id: 'mv5',
        genre: 'Marvel, Action, Comics'
    },
    {
        title: 'Amazonka',
        description: 'Somethong about ',
        id: 'mv6',
        genre: 'Action'
    },
]

export default function MovieList() {
    return (
        <CardColumns>
            {movies.map((movie) => (
                <MovieCard
                    title={movie.title}
                    description={movie.description}
                    key={movie.id}
                    genre={movie.genre}
                    id={movie.id}
                />
            ))}
        </CardColumns>
    );
}
