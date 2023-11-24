import { useState } from 'react'
import { Button, Input, Social } from '../../components/reusables'
import { Link } from 'react-router-dom'

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  return (
    <div className='text-center font-poppins'>
      <p className='text-xl my-10 hidden md:block'>
        Welcome back!!! Please input your details to login
      </p>
      <form
        action=''
        className='flex flex-col gap-5 w-full md:max-w-[400px] mx-auto md:border-2 border-[#027600] shadow-[0px 0px 15px 0px #35BC5B] px-10 pt-20 md:p-10 md:rounded-[20px]'
      >
        <div>
          <Input
            type={'text'}
            placeholder={'Username / Email'}
            className='w-full'
            value={data.email}
            onchange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        <div>
          <Input
            className='w-full'
            type={'password'}
            placeholder={'Password'}
            value={data.password}
            onchange={(e) => setData({ ...data, password: e.target.value })}
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
