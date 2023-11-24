import {
  DosageAlarmsIcon,
  DosageDaysIcon,
  DosageMissedAlarmIcon,
} from '../svgs'

const ReminderCard = () => {
  return (
    <div className='min-h-[180px] bg-primary80 text-white rounded-2xl pt-12 relative overflow-hidden'>
      <div className='text-center'>
        <h3 className='text-xl font-bold sticky z-[500]'>Malaria-Typhoid</h3>
        <p className='font-normal text-sm z-[500] sticky'>
          4 Days of Dosage remaining
        </p>
        <div className='mt-5 flex justify-center gap-6 px-5'>
          <div className='flex flex-col items-center gap-3.5'>
            <DosageDaysIcon />
            <p className=' text-[0.75rem] text-white50'>Days of Dosage</p>
          </div>
          <div className='flex flex-col items-center gap-3.5'>
            <DosageAlarmsIcon />
            <p className='text-[0.75rem] text-white50'>Alarms</p>
          </div>
          <div className='flex flex-col items-center gap-3.5'>
            <DosageMissedAlarmIcon />
            <p className='text-white50 text-[0.75rem] font-bold z-10'>
              Missed Alarms(3)
            </p>
          </div>
        </div>
      </div>
      <div className=' absolute top-0 left-10 z-10'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='144'
          height='60'
          viewBox='0 0 144 60'
          fill='none'
        >
          <g filter='url(#filter0_d_140_543)'>
            <ellipse cx='78.9333' cy='-9' rx='56.6667' ry='50' fill='#35BC5B' />
          </g>
          <defs>
            <filter
              id='filter0_d_140_543'
              x='0.266663'
              y='-70'
              width='143.333'
              height='130'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dx='-7' dy='4' />
              <feGaussianBlur stdDeviation='7.5' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_140_543'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_140_543'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className='absolute bottom-0 right-0'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='74'
          height='78'
          viewBox='0 0 74 78'
          fill='none'
        >
          <ellipse cx='57.3334' cy='50' rx='56.6667' ry='50' fill='#25CF43' />
        </svg>
      </div>
      <div className='absolute top-0 left-0 z-0'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='142'
          height='108'
          viewBox='0 0 142 108'
          fill='none'
        >
          <g filter='url(#filter0_d_140_541)'>
            <ellipse cx='40.8' cy='17' rx='86.1333' ry='76' fill='#027600' />
          </g>
          <defs>
            <filter
              id='filter0_d_140_541'
              x='-60.3333'
              y='-74'
              width='202.267'
              height='182'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='7.5' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_140_541'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_140_541'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default ReminderCard
