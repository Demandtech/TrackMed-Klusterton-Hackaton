import { createBrowserRouter } from 'react-router-dom'
import { Login, SignUp, Home, Dashboard } from './pages'
import { AuthLayout, DashboardLayout } from './layouts'

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
    ],
  },
  {
    path: '/',
    element: <Home />,
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
