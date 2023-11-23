import { DashboardHeader, ProgressCard } from '../../components'

DashboardHeader

const Progress = () => {
  return (
    <div>
      <DashboardHeader message='Progress' />
      <div className='px-5'>
        <ProgressCard />
      </div>
    </div>
  )
}

export default Progress
