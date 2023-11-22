import { useAppContext } from '../hooks'

const Dashboard = () => {
  const { isLoading } = useAppContext()

  console.log(isLoading)


  return <div>Dashboard</div>
}

export default Dashboard
