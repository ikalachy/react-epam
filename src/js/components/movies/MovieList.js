import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import MovieCard from './MovieCard';
import CardColumns from 'react-bootstrap/CardColumns'

import { fetchAllMovies  } from '../../reducers/movies'


export default function MovieList({ removeMovie, showDetails, movies, match }) {

    { console.log('Render MovieList: ' + movies.length) }

    const dispatch = useDispatch()

    useEffect(() => {
        //if (postStatus === 'idle') {
       dispatch(fetchAllMovies())
        //}
      }, [])


    if (movies.length<=0) {
        return (
          <section>
            <h1 className="text-white text-center">No Movies found!</h1>
          </section>
        )
      }

    return (
        <CardColumns>
            {
                movies.map((movie) => (
                    <MovieCard 
                        key={movie.id}
                        movie={movie}
                        removeMovie={removeMovie}
                        showDetails={showDetails}
                    />))
            }
        </CardColumns>
    )
}
