import { WhatsAppIcon, AppleIcon, GoogleIcon } from '../svgs'

const Socials = () => {
  return (
    <div>
      <p className='text-sm'>Or Login via</p>
      <div className='flex gap-5 justify-center mt-5'>
        <button type='button'>
          <WhatsAppIcon />
        </button>
        <button type='button'>
          <AppleIcon />
        </button>
        <button type='button'>
          <GoogleIcon />
        </button>
      </div>
    </div>
  )
}

export default Socials
