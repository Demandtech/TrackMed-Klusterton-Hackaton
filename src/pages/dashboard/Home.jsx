import { DashboardHeader } from '../../components'

const Dashboard = () => {
  return (
    <div className='min-h-screen transition-all duration-300'>
      <DashboardHeader message={'Hi John'} />
      <h1>Home</h1>
    </div>
  )
}

export default Dashboard
