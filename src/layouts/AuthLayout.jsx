import { Link, Outlet } from 'react-router-dom'
import { LogoIcon } from '../components/svgs'
import { ConfirmationModal } from '../components'

const AuthLayout = () => {
  return (
    <div className='max-w-[1440px] mx-auto relative'>
      <Link
        to='/'
        className='items-center flex pl-10 pt-6 md:pt-8 sticky top-0 bg-inherit'
      >
        <LogoIcon />
        <p className=' text-[#027600] font-bold font-orbitron'>TrackMed</p>
      </Link>
      <div className='mx-auto max-w-[600px]'>
        <Outlet />
      </div>
      <ConfirmationModal />
    </div>
  )
}

export default AuthLayout
