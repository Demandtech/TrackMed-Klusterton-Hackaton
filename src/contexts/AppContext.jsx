import {createContext, useReducer } from 'react'
import { AppReducer } from '../reducers'

export const AppContext = createContext()

const initialState = {
  isLoading: false,
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

 

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}


