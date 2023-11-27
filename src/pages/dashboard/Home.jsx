import {
  DashboardHeader,
  ProgressCard,
  ReminderCard,
  AlarmCard,
} from '../../components'
import { useUserContext } from '../../hooks'

const Dashboard = () => {
  const { user } = useUserContext()
  return (
    <div className='transition-all duration-300 md:pt-10 lg:pt-20'>
      <DashboardHeader message={`Hi ${user?.firstName}`} />
      <div className='px-5 flex flex-col gap-6 mt-5 max-w-[450px]  md:mx-auto lg:ml-20'>
        <ReminderCard />
        <div className='px-5'>
          <AlarmCard />
        </div>
        <div className=''>
          <p className='text-[#1E1E1E] mb-5 font-semibold text-sm'>
            Activities
          </p>
          <ProgressCard />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
