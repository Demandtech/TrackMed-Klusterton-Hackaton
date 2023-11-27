const UserReducer = (state, action) => {
  switch (action.type) {
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
    default:
      return state
  }
}

export default UserReducer
