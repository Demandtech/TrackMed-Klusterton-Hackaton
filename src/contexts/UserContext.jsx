import { createContext, useReducer } from 'react'
import { UserReducer } from '../reducers'
import PropTypes from 'prop-types'

export const UserContext = createContext()

const initialState = {
  isLoading: false,
  user: null,
  isAuthenticated: false,
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState)

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT_USER' })
  }

  return (
    <UserContext.Provider value={{ ...state, handleLogout }}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node,
}
