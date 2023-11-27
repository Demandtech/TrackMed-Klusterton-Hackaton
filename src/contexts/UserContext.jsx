import { createContext, useReducer } from 'react'
import { UserReducer } from '../reducers'
import PropTypes from 'prop-types'
import customFetch from '../configs/axios'
import { toast } from 'react-toastify'

export const UserContext = createContext()

const initialState = {
  isLoading: false,
  user: null,
  isAuthenticated: false,
}

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState)

  const userLogout = async () => {
    try {
      const { data, status } = await customFetch.get('/auth/logout')
      if (status === 200) {
        toast.info(data.message)
        dispatch({ type: 'LOGOUT_USER' })
        localStorage.clear('Login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const registerUser = async (newUserData) => {
    try {
      dispatch({ type: 'START_LOADING' })
      const { data, status } = await customFetch.post(
        '/auth/signup',
        newUserData
      )

      console.log(data)
      if (status === 201) {
        dispatch({ type: 'SIGN_UP_SUCCESS', payload: data.user })
        toast.success(data.message)
        return true
      } else {
        console.error('Signup failed with status:', status)
        dispatch({ type: 'SIGN_UP_FAILURE' })
        return false
      }
    } catch (error) {
      if (error.status === 500) return
      // console.error(error.response.data.error)
      toast.error(error.response.data.error)
      dispatch({ type: 'SIGN_UP_FAILURE' })
      return false
    } finally {
      dispatch({ type: 'STOP_LOADING' })
    }
  }

  const verifyUser = async (userId, payload) => {
    try {
      dispatch({ type: 'START_LOADING' })
      const { data, status } = await customFetch.post(
        `/auth/verify/${userId}`,
        payload
      )

      console.log(data)
      if (status === 200) {
        dispatch({ type: 'USER_VERIFIED_SUCCESS' })
        toast.success(data.message)
        return true
      } else {
        return false
      }
    } catch (error) {
      console.log(error)
      return false
    } finally {
      dispatch({ type: 'STOP_LOADING' })
    }
  }

  const loginUser = async (userData) => {
    try {
      dispatch({ type: 'START_LOADING' })
      const { data, status } = await customFetch.post('/auth/login', userData, {
        credentials: 'include',
      })
      if (status === 200) {
        localStorage.setItem('Login', true)
        const isSuccess = getUser()
        if (isSuccess) {
          dispatch({ type: 'LOGIN_SUCCESS' })
          toast.success(data.message)
        }
        return isSuccess
      } else {
        console.error('Signup failed with status:', status)
        dispatch({ type: 'LOGIN_FAILURE' })
        return false
      }
    } catch (error) {
      if (error.status === 500) toast.error(error.response.data.error)
      dispatch({ type: 'LOGIN_FAILURE' })

      return false
    } finally {
      dispatch({ type: 'STOP_LOADING' })
    }
  }

  const getUser = async () => {
    try {
      const { data } = await customFetch.get('/auth/user', {
        credentials: 'include',
      })

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UserContext.Provider
      value={{
        ...state,
        userLogout,
        registerUser,
        loginUser,
        verifyUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node,
}

export default UserProvider
