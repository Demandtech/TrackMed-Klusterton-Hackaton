import { createContext, useReducer } from 'react'
import { AppReducer } from '../reducers'
import PropTypes from 'prop-types'

export const AppContext = createContext()

const initialState = {
  isLoading: false,
  isModalOpen: false,
  isSidebarOpen: false,
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const toggleModal = (action) => {
    dispatch({ type: 'TOGGLE_MODAL', payload: action })
  }

  const toggleSidebar = (action) => {
    console.log(action)
    dispatch({ type: 'TOGGLE_SIDEBAR', payload: action })
  }

  return (
    <AppContext.Provider value={{ ...state, toggleModal, toggleSidebar }}>
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node,
}
