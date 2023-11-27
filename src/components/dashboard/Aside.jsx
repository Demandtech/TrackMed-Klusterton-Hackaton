import { NavLink, useNavigate } from 'react-router-dom'
import {
  HomeIcon,
  ProfileIcon,
  MedicalIcon,
  ProgressIcon,
  LogoutIcon,
  UserIcon,
} from '../svgs'
import useUserContext from '../../hooks/useUserContext'
import { useAppContext } from '../../hooks'
useNavigate

const Aside = () => {
  const { userLogout, user } = useUserContext()
  const { toggleSidebar} = useAppContext()
  const navigate = useNavigate()

  const handleLogout = () => {
    const isSuccess = userLogout()

    if (isSuccess) {
      navigate('/auth/login')
    }
  }

  const closeSidebar = (e) => {
    const backdrop = e.target.classList.contains('aside')
    if (!backdrop) return
    toggleSidebar(false)
  }

  return (
    <aside
      className={`shadow-aside  font-poppins  h-full bg-backdrop backdrop:blur-md z-0 aside`}
      onClick={(e) => closeSidebar(e)}
    >
      <ul className='flex flex-col gap-5  h-full p-2 min-h-screen pt-24 md:pt-12 w-[270px] bg-white md:w-full z-10 shadow-aside'>
        <div className='items-center gap-2 hidden md:flex'>
          <UserIcon width='50' height='50' />
          <h5 className='font-bold text-2xl text-primary80'>
            Hi {user?.firstName}
          </h5>
        </div>
        <li onClick={() => toggleSidebar(false)}>
          <NavLink to={'/dashboard'} className='flex justify-between p-2.5 '>
            <span className='text-primary80 text-sm'>Home</span>
            <HomeIcon />
          </NavLink>
        </li>
        <li onClick={() => toggleSidebar(false)}>
          <NavLink
            to='/dashboard/profile'
            className='flex justify-between p-2.5'
          >
            <span className='text-primary80 text-sm'>Profile</span>
            <ProfileIcon />
          </NavLink>
        </li>
        <li onClick={() => toggleSidebar(false)}>
          <NavLink
            to='/dashboard/medical'
            className='flex justify-between p-2.5'
          >
            <span className='text-primary80 text-sm'>Medical Details</span>
            <MedicalIcon />
          </NavLink>
        </li>
        <li onClick={() => toggleSidebar(false)}>
          <NavLink
            to='/dashboard/progress'
            className='flex justify-between p-2.5'
          >
            <span className='text-primary80 text-sm'>Progress</span>
            <ProgressIcon />
          </NavLink>
        </li>
        <li
          onClick={() => toggleSidebar(false)}
          className='mt-auto border-t-2 border-primary100 p-2.5'
        >
          <button
            onClick={handleLogout}
            type='button'
            className='flex justify-center gap-4  w-full'
          >
            <LogoutIcon />
            <span className='text-sm text-[#ED5D51]'>Logout</span>
          </button>
        </li>
      </ul>
    </aside>
  )
}

export default Aside
