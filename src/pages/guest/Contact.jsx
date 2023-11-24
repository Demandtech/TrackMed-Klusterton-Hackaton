import { EmailIcon, PhoneIcon } from '../../components/svgs'

const Contact = () => {
  return (
    <div className='px-5 lg:px-10 font-poppins pt-4 lg:pt-10'>
      <h2 className='text-primary80 font-bold tracking-[3.2px] text-2xl lg:text-[2.5rem] mb-5'>
        Contact Us
      </h2>
      <div className='flex items-center mb-10 gap-5'>
        <PhoneIcon />
        <p className='text-primary80 text-sm'>+234 905 881 8583</p>
      </div>
      <div className='flex items-center text-primary80 gap-5 text-sm'>
        <EmailIcon />
        <p>officialadupraise@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact
