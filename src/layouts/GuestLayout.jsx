import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { GuestHeader } from '../components'
import { useUserContext } from '../hooks'
import { useEffect } from 'react'

const GuestLayout = () => {
  const location = useLocation()
  const { isAuthenticated } = useUserContext()
  const navigate = useNavigate()


  useEffect(() => {
    const getUserInfo = async () => {
      if (isAuthenticated) {
        return navigate('/dashboard')
      } else {
        return navigate('auth/login')
      }
    }
    getUserInfo()
  }, [isAuthenticated])
  

  return (
    <div className='max-w-[1440px] mx-auto'>
      {location.pathname !== '/' && <GuestHeader />}
      <Outlet />
    </div>
  )
}

export default GuestLayout
