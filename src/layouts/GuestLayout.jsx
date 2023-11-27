import { Outlet, useLocation } from 'react-router-dom'
import { GuestHeader } from '../components'
// import { useUserContext } from '../hooks'
// import { useEffect } from 'react'

const GuestLayout = () => {
  const location = useLocation()
  return (
    <div className='max-w-[1440px] mx-auto'>
      {location.pathname !== '/' && <GuestHeader />}
      <Outlet />
    </div>
  )
}

export default GuestLayout
