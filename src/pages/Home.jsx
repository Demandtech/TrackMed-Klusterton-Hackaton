import { useState } from 'react'
import { Button, Input } from '../components/reusables'

const Home = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  return (
    <div className=' p-3 w-72 flex flex-col gap-2'>
      <Button
        className={'w-full'}
        label={'Login'}
        onclick={() => alert('Login')}
      />
      <Button
        className={'w-1/2'}
        disabled={data.email === '' || data.password === ''}
        label={'SignUp'}
        onclick={() => alert('Sign Up')}
      />
      <Input
        onchange={(e) => setData({ ...data, password: e.target.value })}
        type={'password'}
        placeholder={'Password'}
        value={data.password}
        className='w-1/2'
      />
      <Input
        type={'text'}
        placeholder={'Email / Username'}
        onchange={(e) => setData({ ...data, email: e.target.value })}
        value={data.email}
      />
    </div>
  )
}

export default Home
