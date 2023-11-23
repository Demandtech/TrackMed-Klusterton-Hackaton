import { Outlet } from 'react-router-dom'
import { Aside } from '../components/dashboard'
import { useAppContext } from '../hooks'

const DashboardLayout = () => {
  const { isSidebarOpen } = useAppContext()
  return (
    <div className='flex max-w-[1440px] min-h-screen relative'>
      <div
        className={`transition-all duration-300 shadow-aside z-50 ${
          isSidebarOpen
            ? 'w-full h-full absolute left-0 top-0 opacity-100'
            : 'w-0 md:fixed top-0 md:w-[270px] overflow-hidden opacity-0 md:opacity-100'
        }`}
      >
        <Aside />
      </div>
      <div className='w-full md:ml-[270px]'>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout
