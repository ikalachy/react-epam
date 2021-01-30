
/*

  sort: {
    sortBy: 'releaseDate',
    order: 'ASC'
  }

*/

const sortReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        sortBy: 'releaseDate',
        order: 'ASC'
      }
    default:
      return state
  }
}

export default sortReducer
