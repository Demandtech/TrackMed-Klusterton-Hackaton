import { useContext } from 'react'
import { AppHomeContext } from '../contexts/HomeNavAsideContext'

const useAppHomeContext = () => {
  return useContext(AppHomeContext)
}

export default useAppHomeContext
