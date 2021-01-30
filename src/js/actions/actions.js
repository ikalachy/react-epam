
//TODO: separate actions 
//TODO: refactor CONSTANTS


/*  MOVIES  */
export const addMovie = movie => ({
    type: MOVIE_ACTIONS.ADD_MOVIE,
    payload: {
        movie
    }
})

export const editMovie = movie => ({
    type: MOVIE_ACTIONS.EDIT_MOVIE,
    payload: {
        movie
    }
})


export const removeMovie = id => ({
    type: MOVIE_ACTIONS.REMOVE_MOVIE,
    payload: {
        id: id
    }
}
)

export const toggleHeader = id => ({
    type: 'TOGGLE_HEADER',
    payload: {
        id
    }
})

export const setMovies = movies => ({
    type: 'SET_MOVIES',
    movies
})

export const getMovie = id => ({
    type: 'GET_MOVIE',
    movies
})


export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_GENRE: 'SHOW_GENRE'
}


// MODAL SHOW/HIDE
export const showModal = (id) => ({
    type: 'SHOW_MODAL',
    open: true,
    context: id

})

export const hideModal = (id) => ({
    type: 'HIDE_MODAL',
    open: false,
    context: id

})


// CONSTANTS HERE

export const MOVIE_ACTIONS = {
    ADD_MOVIE: 'ADD_MOVIE',
    EDIT_MOVIE: 'EDIT_MOVIE',
    REMOVE_MOVIE: 'REMOVE_MOVIE',
    SHOW_MOVIE: 'SHOW_MOVIE',
    RESET_MOVIE: 'RESET_MOVIE',
}


