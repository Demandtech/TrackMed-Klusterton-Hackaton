import { Outlet } from 'react-router-dom'
import { LogoIcon } from '../components/svgs'

const AuthLayout = () => {
  return (
    <div className='max-w-[1440px] mx-auto relative'>
      <div className='items-center hidden md:flex pl-10 pt-10 sticky top-0'>
        <LogoIcon />
        <p className=' text-[#027600] font-bold font-orbitron'>TrackMed</p>
      </div>
      <div className='mx-auto max-w-[600px]'>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
