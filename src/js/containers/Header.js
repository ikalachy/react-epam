import { connect } from 'react-redux'
import { toggleHeader, addMovie } from '../actions/actions'
import HeaderCard from '../components/header/HeaderCard'

//show details in case we need them for Header 
const getMovieDetails = (movies) => {
  let filteredMovies = movies.filter(movie => movie.show_details)
  return filteredMovies.length > 0
    ? filteredMovies[0]
    : {}
}

const mapStateToProps = state => ({
  item: getMovieDetails(state.movies),
  isOpen: state.modal.modalProps.open
})

const mapDispatchToProps = dispatch => ({
  toggleHeader: id => dispatch(toggleHeader(id)),
  addMovie: movie => dispatch(addMovie(movie)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderCard)
