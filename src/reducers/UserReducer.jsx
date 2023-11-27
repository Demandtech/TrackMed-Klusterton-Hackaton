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
        token: null,
      }
    case 'SIGN_UP_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: false,
        token: null,
      }
    case 'USER_VERIFIED_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        token: null,
      }
    case 'GET_USER':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      }
    default:
      return state
  }
}

export default UserReducer
