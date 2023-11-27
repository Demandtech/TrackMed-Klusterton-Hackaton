import AlarmSvg from '../../components/svgs/AlarmSvg'

const AlarmCard = () => {
  return (
    <div className='bg-primary100/50 flex items-center justify-between py-2 px-4 rounded-[100px] gap-5'>
      <p className='text-[0.75rem] text-primary80'>
        Your next reminder is in 5 minutes. Please make sure to use your drugs.
      </p>
      <div>
        <AlarmSvg />
      </div>
    </div>
  )
}

export default AlarmCard
