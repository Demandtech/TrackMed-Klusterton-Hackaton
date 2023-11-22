import { Outlet } from 'react-router-dom'

Outlet

const AuthLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default AuthLayout
