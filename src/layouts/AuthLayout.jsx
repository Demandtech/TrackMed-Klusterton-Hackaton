import { Outlet, useNavigate } from 'react-router-dom'
import { ConfirmationModal, AuthHeader } from '../components'
import { useUserContext } from '../hooks'
import { useEffect } from 'react'

const AuthLayout = () => {
  const { isAuthenticated } = useUserContext()
  const navigate = useNavigate()

  useEffect(() => {
    const getUserInfo = async () => {
      if (isAuthenticated) {
        return navigate('/dashboard')
      }
    }
    getUserInfo()
  }, [isAuthenticated])

  return (
    <div className='max-w-[1440px] mx-auto relative'>
      <AuthHeader />
      <div className='mx-auto max-w-[600px]'>
        <Outlet />
      </div>
      <ConfirmationModal />
    </div>
  )
}

export default AuthLayout
