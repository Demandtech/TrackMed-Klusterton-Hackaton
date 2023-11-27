import { useState } from 'react'
import { Button, Input, Social } from '../../components/reusables'
import { Link, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../hooks'
import Loader from '../../components/reusables/Loader'

const Login = () => {
  const { loginUser, isLoading } = useUserContext()
  const navigate = useNavigate()

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!data.email || !data.password) return
    const isSuccess = await loginUser(data)
    if (isSuccess) {
      navigate('/dashboard')
    }
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className='text-center font-poppins'>
      <p className='text-xl mb-10 hidden md:block'>
        Welcome back!!! Please input your details to login
      </p>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-5 w-full md:max-w-[400px] mx-auto md:border-2 border-[#027600] shadow-[0px 0px 15px 0px #35BC5B] px-10 pt-20 md:p-10 md:rounded-[20px]'
      >
        <div>
          <Input
            type={'text'}
            placeholder={'Username / Email'}
            name='email'
            className='w-full'
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        <div>
          <Input
            className='w-full'
            type={'password'}
            name='password'
            placeholder={'Password'}
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className='flex items-center justify-between text-sm'>
          <div className='flex items-center gap-1'>
            <label htmlFor=''>Remember me</label>
            <input type='checkbox' name='' id='' />
          </div>
          <div>
            <Link to={'/forgot_password'}>Forgot Password</Link>
          </div>
        </div>
        <div>
          <Button
            disabled={data.email === '' || data.password === ''}
            label='Login'
            className='w-full'
            type='submit'
          />
        </div>
        <div>
          <p className='text-sm mb-3'>
            New User?{' '}
            <Link to={'/auth/signup'} className='font-medium'>
              Click Here
            </Link>
          </p>

          <Social />
        </div>
      </form>
    </div>
  )
}

export default Login
