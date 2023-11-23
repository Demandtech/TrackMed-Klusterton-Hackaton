const AppReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        isModalOpen: action.payload,
      }
    case 'TOGGLE_SIDEBAR':
      console.log('Here')
      return {
        ...state,
        isSidebarOpen: action.payload,
      }
  }
}

export default AppReducer
