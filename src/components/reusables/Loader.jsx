import { Oval } from 'react-loader-spinner'
const Loader = () => {
  return (
    <div className=''>
      <div
        className='flex items-center justify-center'
        style={{ height: 'calc(100vh - 90px)' }}
      >
        <Oval
          height={100}
          width={100}
          color='#027600'
          secondaryColor='#35BC5B'
          strokeWidth={4}
        />
      </div>
    </div>
  )
}

export default Loader
