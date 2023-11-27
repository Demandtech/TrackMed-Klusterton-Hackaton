const UserReducer = (state, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true }
    case 'STOP_LOADING':
      return { ...state, isLoading: false }
    case 'LOGOUT_USER':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      }
    case 'SIGN_UP_SUCCESS':
      console.log(action.payload)
      return {
        ...state,
        user: action.payload,
        isAuthenticated: false,
      }
    case 'USER_VERIFIED_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
      }
    case 'GET_USER':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      }
    default:
      return state
  }
}

export default UserReducer
