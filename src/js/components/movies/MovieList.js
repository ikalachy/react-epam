import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import MovieCard from './MovieCard';
import CardColumns from 'react-bootstrap/CardColumns'

import useLayoutEffect from '../../use-isomorphic-layout-effect';

export default function MovieList({ removeMovie, showDetails, movies, match }) {

    { console.log('Render MovieList: ') }

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        //if (postStatus === 'idle') {
       console.log('Render MovieList useEffect() ')
       //dispatch(fetchAllMovies())
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
