import { Modal } from '../reusables'
import { useAppContext } from '../../hooks'
import { useNavigate } from 'react-router-dom'

const ConfirmationModal = () => {
  const { isModalOpen, toggleModal } = useAppContext()
  const navigate = useNavigate()
  const handleConfirm = () => {
    toggleModal(false)
    navigate('/auth/confirm/otp')
  }
  return (
    <Modal isModalOpen={isModalOpen}>
      <div className='w-[250px] h-[250px] bg-white50 rounded-2xl text-center p-5 flex flex-col'>
        <div>
          <h4 className='mt-10 font-bold text-sm mb-5'>CONFIRM NUMBER!!!</h4>
          <p className=''>Confirm Number!! You will recieve a code by sms</p>
        </div>
        <div className='mt-auto'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='202'
            height='1'
            viewBox='0 0 202 1'
            fill='none'
          >
            <path d='M1 0.5H201' stroke='black' strokeLinecap='round' />
          </svg>
          <button
            onClick={handleConfirm}
            className='text-sm font-bold text-primary100 uppercase mt-2'
          >
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ConfirmationModal
