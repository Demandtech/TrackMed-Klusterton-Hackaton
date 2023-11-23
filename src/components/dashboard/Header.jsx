import { useAppContext } from '../../hooks'
import { MenuIcon, NotificationIcon } from '../svgs'
import PropTypes from 'prop-types'

const Header = ({ message }) => {
  const { toggleSidebar } = useAppContext()

  return (
    <div className='md:hidden  flex justify-between py-5 px-4 sticky top-0 bg-white'>
      <div className='flex items-center gap-2'>
        <button
          onClick={() => {
            toggleSidebar(message)
          }}
        >
          <MenuIcon />
        </button>
        <span className='text-primary80 font-bold text-sm'>{message}</span>
      </div>
      <div>
        <button>
          <NotificationIcon />
        </button>
      </div>
    </div>
  )
}
Header.propTypes = {
  message: PropTypes.string,
}
export default Header
