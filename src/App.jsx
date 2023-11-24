import { RouterProvider } from 'react-router-dom'
import router from './router'
import { AppProvider } from './contexts/AppContext'
import UserProvider  from './contexts/UserContext'

function App() {
  return (
    <UserProvider>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </UserProvider>
  )
}

export default App
