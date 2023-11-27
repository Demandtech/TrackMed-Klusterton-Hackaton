import { createContext, useEffect, useReducer } from 'react'
import { UserReducer } from '../reducers'
import PropTypes from 'prop-types'
import customFetch from '../configs/axios'
import { toast } from 'react-toastify'

export const UserContext = createContext()

const initialState = {
  isLoading: false,
  user: null,
  isAuthenticated: false,
  token: null,
}

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState)

  const userLogout = async () => {
    toast.info('Log out successfully')
    dispatch({ type: 'LOGOUT_USER' })
    localStorage.removeItem('token')
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
    dispatch({ type: 'START_LOADING' })
    try {
      const { data, status } = await customFetch.post('/auth/login', userData, {
        credentials: 'include',
        'Content-Type': 'application/json',
      })
      if (status === 200) {
        localStorage.setItem('token', data.token)
        const isSuccess = await getUser()
        console.log(isSuccess)
        if (isSuccess) {
          dispatch({ type: 'LOGIN_SUCCESS' })
          dispatch({ type: 'STOP_LOADING' })
          toast.success(data.message)
        }
        return isSuccess
      } else {
        dispatch({ type: 'LOGIN_FAILURE' })
        return false
      }
    } catch (error) {
      if (error.response.status === 500) return
      toast.error(error.response.data.error)
      dispatch({ type: 'LOGIN_FAILURE' })
      return false
    } finally {
      dispatch({ type: 'STOP_LOADING' })
    }
  }

  const getUser = async () => {
    const token = localStorage.getItem('token')

    if (!token) return false

    dispatch({ type: 'START_LOADING' })
    try {
      const { data, status } = await customFetch.get('/auth/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!status === 200 || data.user === null) {
        dispatch({ type: 'STOP_LOADING' })
        return false
      }
      console.log(data.user)
      dispatch({ type: 'STOP_LOADING' })
      dispatch({ type: 'GET_USER', payload: data })
      return true
    } catch (error) {
      console.log(error)
    } finally {
      dispatch({ type: 'STOP_LOADING' })
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <UserContext.Provider
      value={{
        ...state,
        userLogout,
        registerUser,
        loginUser,
        verifyUser,
        getUser,
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
