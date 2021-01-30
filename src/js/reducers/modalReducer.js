const initialState = {
  modalType: null,
  modalProps: {
    open: false,
    context: ''
  }
}

const modal = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        modalProps: {
          open: action.open,
          context: action.context
        }
      }
    case 'HIDE_MODAL':
      return initialState
    default:
      return state
  }
}

export default modal