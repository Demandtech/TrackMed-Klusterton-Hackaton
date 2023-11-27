import { useState, useRef, useEffect } from 'react'
import { Input, Button } from '../../components/reusables'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../../hooks'

const ConfirmOtp = () => {
  const [isMounted, setIsMounted] = useState(false)
  const { user, verifyUser } = useUserContext()
  const navigate = useNavigate()

  const [otpValue, setOtpValue] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
    fifth: '',
  })

  const inputRefs = {
    first: useRef(null),
    second: useRef(null),
    third: useRef(null),
    fourth: useRef(null),
    fifth: useRef(null),
  }

  const handleInputChange = (currentInput, value) => {
    if (/^[0-9]*$/.test(value)) {
      setOtpValue((prevOtpValue) => ({
        ...prevOtpValue,
        [currentInput]: value,
      }))

      const nextInput = getNextInput(currentInput)
      if (value !== '' && nextInput) {
        inputRefs[nextInput].current.focus() // Corrected this line
      }
    }
  }

  const getNextInput = (currentInput) => {
    const inputOrder = ['first', 'second', 'third', 'fourth', 'fifth']
    const currentIndex = inputOrder.indexOf(currentInput)
    return currentIndex < inputOrder.length - 1
      ? inputOrder[currentIndex + 1]
      : null
  }

  const disabledBtn =
    otpValue.first === '' ||
    otpValue.second === '' ||
    otpValue.third === '' ||
    otpValue.fourth === '' ||
    otpValue.fifth === ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!disabledBtn && user) {
      const code = `${otpValue.first}${otpValue.second}${otpValue.third}${otpValue.fourth}${otpValue.fifth}`

      const payload = {
        code,
      }
      const isSuccess = await verifyUser(user?.id, payload)

      console.log(isSuccess)

      if (isSuccess) {
        navigate('/auth/login')
      }
    }
    // navigate('/dashboard/home')
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      className={`text-center font-poppins pt-20 md:pt-10 pb-5 bg-white  md:translate-x-0 transition-all duration-300 ${
        isMounted ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <p className='text-sm font-bold mb-5'>Input received OTP</p>
      <p className='text-sm'>An OTP has been sent to your phone number</p>
      <form
        onSubmit={handleSubmit}
        className='md:mt-10 w-full md:max-w-[400px] mx-auto shadow-[0px 0px 15px 0px #35BC5B] px-10 pt-28 md:p-10 md:rounded-[20px]'
      >
        <div className='flex mb-10 justify-between'>
          {Object.keys(otpValue).map((key) => (
            <div key={key} className='w-12 h-12'>
              <Input
                ref={inputRefs[key]}
                type='text'
                name={key}
                className='w-full text-center text-xl font-medium'
                value={otpValue[key]}
                onChange={(e) => handleInputChange(key, e.target.value)}
              />
            </div>
          ))}
        </div>
        <div>
          <Button
            disabled={disabledBtn}
            label='Receive Otp'
            type='submit'
            className='w-full'
          />
        </div>
      </form>
    </div>
  )
}

export default ConfirmOtp
