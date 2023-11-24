import { useNavigate } from 'react-router-dom'
const GuestHeader = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }
  return (
    <div className='pt-10 px-5 lg:px-10'>
      <button onClick={goBack}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='15'
          height='30'
          viewBox='0 0 19 34'
          fill='none'
        >
          <path
            d='M16.9999 2C16.9999 2 2.00003 13.0473 2 17.0001C1.99997 20.9529 17 32 17 32'
            stroke='#027600'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
    </div>
  )
}

export default GuestHeader
