import { VisibilityFilters } from '../actions/actions'

const visibilityFilter = (state = [], action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        filter: action.filter,
        value: action.value
      }
    default:
      return state
  }
}

export default visibilityFilter
