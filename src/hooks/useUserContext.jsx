import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'


const useUserContext = () => {
  return useContext(UserContext)
}

export default useUserContext
