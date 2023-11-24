import {
  DashboardHeader,
  ProgressCard,
  ReminderCard,
  AlarmCard,
} from '../../components'

const Dashboard = () => {
  return (
    <div className='min-h-screen transition-all duration-300'>
      <DashboardHeader message={'Hi John'} />
      <div className='px-5 flex flex-col gap-6 mt-5'>
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
