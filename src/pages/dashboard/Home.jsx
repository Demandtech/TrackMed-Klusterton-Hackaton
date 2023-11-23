import { DashboardHeader, ProgressCard } from '../../components'

const Dashboard = () => {
  return (
    <div className='min-h-screen transition-all duration-300'>
      <DashboardHeader message={'Hi John'} />
      <div className='px-5'>
        <p className='text-[#1E1E1E] mb-5 font-semibold text-sm'>Activities</p>
        <ProgressCard />
      </div>
    </div>
  )
}

export default Dashboard
