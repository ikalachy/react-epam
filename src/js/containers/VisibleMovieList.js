import { connect } from 'react-redux'
import { removeMovie, toggleHeader } from '../actions/actions'
import { VisibilityFilters } from '../actions/actions'
import MovieList from '../components/movies/MovieList'



const getVisibleMovies = (allMovies, context) => {
  switch (context.filter) {
    case VisibilityFilters.SHOW_ALL:
      return allMovies
    case VisibilityFilters.SHOW_GENRE:
      return allMovies.filter(m => m.genres.includes(context.value))
    default:
      allMovies
  }
}

const mapStateToProps = state => ({
  movies: getVisibleMovies(state.movies, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  removeMovie: id => dispatch(removeMovie(id)),
  showDetails: id => dispatch(toggleHeader(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList)
