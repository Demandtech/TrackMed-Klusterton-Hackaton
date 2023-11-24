import { Outlet } from 'react-router-dom'
import { ConfirmationModal, AuthHeader } from '../components'

const AuthLayout = () => {
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
