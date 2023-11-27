import { DashboardHeader, ProgressCard } from '../../components'
import { Button } from '../../components/reusables'

const progressList = [
  { action: 'took', duration: null },
  { action: 'snoozed', duration: 5 },
  { action: 'missed', duration: 5 },
  { action: 'took', duration: null },
  { action: 'took', duration: null },
  { action: 'took', duration: null },
  { action: 'snoozed', duration: 10 },
  { action: 'snoozed', duration: 15 },
  { action: 'took', duration: null },
]

const Progress = () => {
  return (
    <div className='pb-10'>
      <DashboardHeader message='Progress' />
      <div className='px-5  mt-5  max-w-[450px]  md:mx-auto lg:ml-20'>
        <ProgressCard />
        <div className='py-5'>
          <h4 className='font-bold mb-5'>Timeline</h4>
          <ul className='flex flex-col gap-4 mb-10'>
            {progressList.map((info, index) => {
              return (
                <li key={index}>
                  <p className='text-dark20'>
                    You
                    <span
                      className={`${
                        info.action == 'missed'
                          ? 'text-[#ED5D51] font-semibold'
                          : info.action == 'snoozed'
                          ? 'text-[#FBBC05] font-semibold'
                          : 'text-dark20'
                      }`}
                    >
                      {' '}
                      {info.action}
                    </span>
                    <span>
                      {info.action == 'took'
                        ? ' your drugs '
                        : info.action == 'snoozed'
                        ? ` an alarm for `
                        : ` an alarm by`}
                    </span>
                    {info.duration && (
                      <span className='font-bold'> {info.duration} mins </span>
                    )}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
        <Button
          label='Generate Report'
          className='w-full bg-primary80 lg:w-1/2'
        />
      </div>
    </div>
  )
}

export default Progress
