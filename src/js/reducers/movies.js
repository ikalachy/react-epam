import { MOVIE_ACTIONS, setMovies } from '../actions/actions'
import { v4 as uuidv4 } from 'uuid';


const movies = (state = [], action) => {
    console.log(`movies dispatch ${action.type} `)
    switch (action.type) {
        case MOVIE_ACTIONS.ADD_MOVIE:
            return [
                ...state, action.payload.movie
            ]
        case MOVIE_ACTIONS.REMOVE_MOVIE:
            return state.filter(movie => movie.id !== action.payload.id)
        case MOVIE_ACTIONS.EDIT_MOVIE:
            return state.map(movie =>
                (movie.id === action.payload.movie.id)
                    ? { ...action.payload.movie }
                    : movie
            )
        case 'TOGGLE_HEADER':
            return state.map(movie =>
                (movie.id === action.payload.id)
                    ? { ...movie, show_details: !movie.show_details }
                    : movie
            )
        case 'SET_MOVIES':
            return [...action.movies]
        default:
            return state
    }
}


export function fetchAllMovies() {
    return dispatch => {
        fetch("https://600d74baf979dd001745cba7.mockapi.io/api/v1/movies")
            .then(res => res.json())
            .then(mvs => dispatch(setMovies(mvs)))

    };
}


export function fetchMovieById() {
    return (dispatch, state) => {
        const id = state.modal.modalProps.context
        fetch("https://600d74baf979dd001745cba7.mockapi.io/api/v1/movies/" + id)
            .then(res => res.json())
            .then(mvs => dispatch(getMovie(mvs)))

    };
}

// Write a synchronous outer function that receives the `text` parameter:
export function deleteMovieApi(id) {
    // And then creates and returns the async thunk function:
    return async function deleteMovieApiThunk(dispatch, getState) {
        // ✅ Now we can use the text value and send it to the server
        const movieIdToDelete = id

        const response = await fetch(`https://600d74baf979dd001745cba7.mockapi.io/api/v1/movies/${movieIdToDelete}`, {
            method: 'DELETE', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            //  body: JSON.stringify(movieIdToDelete),
        })
            .then(response => response.json())
            .catch((error) => {
                console.error('Error:', error);
            });

        dispatch({ type: 'REMOVE_MOVIE', payload: { id: movieIdToDelete } })
    }
}

// Write a synchronous outer function that receives the `text` parameter:
export function saveNewMovieRemote(movie) {
    // And then creates and returns the async thunk function:
    return async function saveNewMovieThunk(dispatch, getState) {
        // ✅ Now we can use the text value and send it to the server
        const mode = (movie.id.length === 0) ? 'ADD' : 'EDIT'
        const initialMovie =
        {
            id: uuidv4(),
            title: movie.title,
            imdbRating: 4.3,
            storyline: movie.storyline,
            genres: movie.genres,
            description: '',
            year: 2006,
            show_details: false,
            posterurl: 'https://dummyimage.com/337x500/232323/FF'
        }



        const response = await fetch('https://600d74baf979dd001745cba7.mockapi.io/api/v1/movies', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(initialMovie),
        })
            .then(response => response.json())
            .catch((error) => {
                console.error('Error:', error);
            });

        // mock api returns not waht we want api 
        dispatch({ type: 'ADD_MOVIE', payload: { movie: initialMovie } })
    }
}


// Write a synchronous outer function that receives the `text` parameter:
export function updateMovieRemote(movie) {
    // And then creates and returns the async thunk function:
    return async function updateMovieRemoteThunk(dispatch, getState) {
        // ✅ Now we can use the text value and send it to the server

        const initialMovie = movie
 
        const response = await fetch('https://600d74baf979dd001745cba7.mockapi.io/api/v1/movies', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(initialMovie),
        })
            .then(response => response.json())
            .catch((error) => {
                console.error('Error:', error);
            });

        // mock api returns not what we want api 
        dispatch({ type: 'EDIT_MOVIE', payload: { movie: initialMovie } })
    }
}


export default movies
