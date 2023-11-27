
import { MobileMenuIcon } from "../svgs";
import { NavLink } from "react-router-dom";
const MobileNav = () => {
  return (
    <div className='md:hidden'>
      {' '}
      <nav className='mt-10 flex justify-between items-center px-2'>
        <MobileMenuIcon />
        <div className='flex gap-5'>
          <div className=' border-primary100 border-[3px] rounded-[15px] py-2 w-[100px] text-center cursor-pointer'>
            <NavLink to='/auth/signup'>
              <p className='text-sm font-bold text-primary100 font-poppins'>
                Register
              </p>
            </NavLink>
          </div>

          <div className='border-primary100 border-[3px] bg-primary100  rounded-[15px] w-[100px] text-center py-2 cursor-pointer '>
            <NavLink to='/auth/login'>
              <p className='text-sm font-bold text-slate-600 font-poppins'>
                Login
              </p>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MobileNav
