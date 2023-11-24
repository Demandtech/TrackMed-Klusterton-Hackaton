import { DashboardHeader } from '../../components'
import { UserIcon } from '../../components/svgs'

const Profile = () => {
  return (
    <div>
      <DashboardHeader message='Profile' />
      <div className='flex justify-center mt-8'>
        <UserIcon width='150' height='150' />
      </div>
    </div>
  )
}

export default Profile
