import { Link } from 'react-router-dom'
import { LogoIcon } from '../../components/svgs'

const AuthHeader = () => {
  return (
    <div className='sticky top-0 bg-white'>
      <Link
        to='/'
        className='items-center flex pl-10 pt-6 md:pt-8 bg-inherit pb-4'
      >
        <LogoIcon />
        <p className=' text-[#027600] font-bold font-orbitron'>TrackMed</p>
      </Link>
    </div>
  )
}

export default AuthHeader
