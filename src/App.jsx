import { RouterProvider } from 'react-router-dom'
import router from './router'
import { AppProvider } from './contexts/AppContext'
import UserProvider from './contexts/UserContext'
import { useEffect, useState } from 'react'
import { PreLoader } from './components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const isLoaded = sessionStorage.getItem('isLoaded')
    if (isLoaded) {
      setIsLoading(false)
    } else {
      setTimeout(() => {
        setIsLoading(false)
        sessionStorage.setItem('isLoaded', 'true')
      }, 2000)
    }
  }, [])

  return (
    <AppProvider>
      <UserProvider>
        {isLoading ? <PreLoader /> : <RouterProvider router={router} />}
        <ToastContainer hideProgressBar={true} />
      </UserProvider>
    </AppProvider>
  )
}

export default App
