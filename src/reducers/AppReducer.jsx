const AppReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        isModalOpen: action.payload,
      }
  }
}

export default AppReducer
