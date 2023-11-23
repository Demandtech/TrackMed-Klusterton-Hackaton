const UserReducer = (state, action) => {
  switch (action.type) {
    case 'LOGOUT_USER':
      return {
        ...state,
        user: null,
      }
  }
}

export default UserReducer
