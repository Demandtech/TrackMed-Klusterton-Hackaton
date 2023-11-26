import { useState } from 'react'
import { Button, Input, Social } from '../../components/reusables'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../hooks'

const SignUp = () => {
  const { registerUser } = useUserContext()

  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    re_password: '',
    number: '',
  })

  const disabledBtn =
    data.first_name == '' ||
    data.last_name == '' ||
    data.email == '' ||
    data.password == '' ||
    data.re_password == ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(data)

    const isSuccess = await registerUser(data)

    console.log(isSuccess)
    // toggleModal(true)
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
            value={data.first_name}
            onChange={(e) => setData({ ...data, first_name: e.target.value })}
          />
        </div>
        <div>
          <Input
            type={'text'}
            placeholder={'Last name'}
            className='w-full'
            value={data.last_name}
            onChange={(e) => setData({ ...data, last_name: e.target.value })}
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
            value={data.number}
            onChange={(e) => setData({ ...data, number: e.target.value })}
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
