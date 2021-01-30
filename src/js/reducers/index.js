import { combineReducers } from 'redux'
import movies from './movies'
import visibilityFilter from './visibilityFilter'
import modal from './modalReducer'
import sort from './sortReducer'

export default combineReducers({
    movies,
    visibilityFilter,
    sort,
    modal
})
