import { createBrowserRouter } from 'react-router-dom'
import { Login, SignUp, Home, Dashboard, ConfirmOtp } from './pages'
import { AuthLayout, DashboardLayout, GuestLayout } from './layouts'


const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'confirm/otp',
        element: <ConfirmOtp />,
      },
    ],
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'home',
        element: <Dashboard />,
      },
    ],
  },
])

export default router
