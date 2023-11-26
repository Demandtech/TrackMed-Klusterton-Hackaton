import { createContext, useReducer } from 'react'
import { UserReducer } from '../reducers'
import PropTypes from 'prop-types'
import customFetch from '../configs/axios'

export const UserContext = createContext()

const initialState = {
  isLoading: false,
  user: null,
  isAuthenticated: false,
}

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState)

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT_USER' })
  }

  const handleLoginUser = () => {
    dispatch({ type: 'LOGIN_USER' })
  }

  const registerUser = async (data) => {
    try {
      dispatch({ type: 'START_LOADING' })
      const response = await customFetch.post('/auth/signup', data)

      console.log(response.data)
      if (response.status === 201) {
        dispatch({ type: 'SIGN_UP_SUCCESS' })

        return true
      } else {
        console.error('Signup failed with status:', response.status)
        dispatch({ type: 'SIGN_UP_FAILURE' })
        return false
      }
    } catch (error) {
      console.error('Error during signup:', error)
      dispatch({ type: 'SIGN_UP_FAILURE' })
      return false
    } finally {
      dispatch({ type: 'STOP_LOADING' })
    }
  }

  return (
    <UserContext.Provider
      value={{ ...state, handleLogout, handleLoginUser, registerUser }}
    >
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node,
}

export default UserProvider
