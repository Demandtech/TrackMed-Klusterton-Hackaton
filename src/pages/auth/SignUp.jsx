import { useState } from 'react'
import { Button, Input, Social } from '../../components/reusables'
import { Link } from 'react-router-dom'
import { useUserContext, useAppContext } from '../../hooks'

const SignUp = () => {
  const { registerUser } = useUserContext()
  const { toggleModal } = useAppContext()

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    re_password: '',
    phoneNumber: '',
  })

  const disabledBtn =
    data.firstName == '' ||
    data.lastName == '' ||
    data.email == '' ||
    data.password == '' ||
    data.re_password == '' ||
    data.phoneNumber == ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const isSuccess = await registerUser(data)
      if (isSuccess) {
        toggleModal(isSuccess)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='text-center font-poppins pb-5'>
      <p className='text-lg mb-5 hidden md:block'>
        Welcome new user!! Please fill in the form correctly to get started
      </p>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-5 w-full md:max-w-[400px] mx-auto md:border-2 border-[#027600] shadow-[0px 0px 15px 0px #35BC5B] px-10 pt-10 md:pt-20 md:p-10 md:rounded-[20px]'
      >
        <div>
          <Input
            type={'text'}
            placeholder={'First name'}
            className='w-full'
            value={data.firstName}
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
          />
        </div>
        <div>
          <Input
            type={'text'}
            placeholder={'Last name'}
            className='w-full'
            value={data.lastName}
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
          />
        </div>
        <div>
          <Input
            type={'text'}
            placeholder={'E-mail'}
            className='w-full'
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div>
          <Input
            type={'text'}
            placeholder={'Phone Number'}
            className='w-full'
            value={data.phoneNumber}
            onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
          />
        </div>
        <div>
          <Input
            className='w-full'
            type={'password'}
            placeholder={'Password'}
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div>
          <Input
            className='w-full'
            type={'password'}
            placeholder={'Confirm password'}
            value={data.re_password}
            onChange={(e) => setData({ ...data, re_password: e.target.value })}
          />
        </div>

        <div>
          <Button
            disabled={disabledBtn}
            label='Receive Otp'
            type='submit'
            className='w-full'
          />
        </div>
        <div>
          <p className='text-sm mb-3'>
            Have an account?{' '}
            <Link to={'/auth/login'} className='font-medium'>
              Click Here
            </Link>
          </p>

          <Social />
        </div>
      </form>
    </div>
  )
}

export default SignUp
