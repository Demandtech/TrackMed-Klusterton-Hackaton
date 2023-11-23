import { Outlet } from 'react-router-dom'
import { Aside } from '../components/dashboard'
import { useAppContext } from '../hooks'

const DashboardLayout = () => {
  const { isSidebarOpen } = useAppContext()
  return (
    <div className='flex w-full min-h-screen'>
      <div
        className={`transition-all duration-300 shadow-aside ${
          isSidebarOpen
            ? 'w-full absolute left-0 top-0 opacity-100'
            : 'w-0 static md:w-[270px] overflow-hidden opacity-0 md:opacity-100'
        }`}
      >
        <Aside />
      </div>
      <div className='w-full '>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout
