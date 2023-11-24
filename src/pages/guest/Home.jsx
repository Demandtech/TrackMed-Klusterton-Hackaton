import { MobileNav, WebNav } from '../../components/reusables'
import { logotext } from '../../assets/images'

const Home = () => {
  return (
    <div className=' h-screen w-screen bg-hero bg-cover bg-green-200 bg-center'>
      <div className='flex flex-col h-full'>
        <div className='mb-20 flex-grow'>
          <WebNav />
          <MobileNav />
          <div className='m-auto mt-[87px] px-5'>
            <img src={logotext} alt='logo' className='mx-auto' />
            <p className='text-center mt-6 text-white text-[40px] max-md:text-xs min-[768px]:text-[20px] leading-none font-poppins italic'>
              Never miss a dose......
            </p>
          </div>
        </div>
        <footer className='bg-footerBg bg-cover bg-center mt-28'>
          <div className='pt-10 lg:pt-20 m-auto'>
            <p className='pl-10 mb-5 text-xl font-poppins italic font-bold text-white max-md:text-center max-md:text-[32px] leading-none'>
              Features
            </p>
            <div className='grid max-md:grid-cols-1 min-[768px]:grid-cols-2 lg:grid-cols-3 gap-3 px-5 mb-5'>
              <div className=' '>
                <p className='max-md:text-xs max-md:text-center text-xl text-white font-semibold italic pb-2'>
                  Health Journal/Logs:
                </p>
                <ul>
                  <li className='max-md:text-xs text-white font-poppins text-center italic'>
                    Provide a digital health journal where users can log their
                    daily medication intake, allowing them to track their
                    adherence over time.
                  </li>
                </ul>
              </div>
              <div className=' '>
                <p className='max-md:text-xs max-md:text-center text-xl text-white font-semibold italic pb-2'>
                  Medication Information:
                </p>
                <ul>
                  <li className='max-md:text-xs text-white font-poppins text-center italic'>
                    Include a feature to store and display information about
                    each medication, such as its purpose, potential side
                    effects, and any special instructions.
                  </li>
                </ul>
              </div>
              <div className=' '>
                <p className='max-md:text-xs text-xl max-md:text-center text-white font-semibold italic pb-1'>
                  Medication Scheduling:
                </p>
                <ul className=''>
                  <li className='max-md:text-xs text-white font-poppins text-center italic '>
                    Allow users to input their medication details, including the
                    name of the drug, dosage, frequency, and the specific
                    time(s) of day when the medication should be taken.
                  </li>
                  <li className='max-md:text-xs text-white font-poppins text-center italic'>
                    Provide a user-friendly interface for scheduling daily,
                    weekly, or custom repeating reminders.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
