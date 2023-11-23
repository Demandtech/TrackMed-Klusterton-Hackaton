import { useNavigate } from 'react-router-dom'

const UserReducer = (state, action) => {
  const navigate = useNavigate()
  switch (action.type) {
    case 'LOGOUT_USER':
      navigate('/auth/login')
      return {
        ...state,
        user: null,
      }
  }
}

export default UserReducer
