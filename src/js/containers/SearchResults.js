import { connect } from 'react-redux'
import { removeMovie, toggleHeader } from '../actions/actions'
import { VisibilityFilters } from '../actions/actions'
import MovieList from '../components/movies/MovieList'



const getSearchResult = (allMovies, ownProps) => {
  //if (referrer.search(new RegExp("Ral", "i")) == -1) { ...
  let result = []
  const { query } = ownProps.match.params


  if (query) {
    let regexp = new RegExp(query, "i")
    result = allMovies.filter(m => (m.storyline.search(regexp) != -1) || (m.title.search(regexp) != -1))
  }

  return result

}

const mapStateToProps = (state, ownProps) => ({
  movies: getSearchResult(state.movies, ownProps)
})

const mapDispatchToProps = dispatch => ({
  removeMovie: id => dispatch(removeMovie(id)),
  showDetails: id => dispatch(toggleHeader(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList)
