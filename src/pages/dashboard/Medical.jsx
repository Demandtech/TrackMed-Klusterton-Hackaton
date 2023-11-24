import { useState } from 'react'
import { DashboardHeader } from '../../components'
import { Button } from '../../components/reusables'

const Medical = () => {
  const [data, setData] = useState({
    nature_of_illness: '',
    data_of_diagostics: '',
    medications_prescribed: '',
    dosage_start_date: '',
    dosage_end_date: '',
    snooze_reminder: '',
    dosage_interval: '',
  })
  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    setData({
      [name]: value,
    })
  }

  const disabledBtn =
    data.data_of_diagostics == '' ||
    data.dosage_end_date == '' ||
    data.dosage_interval == '' ||
    data.dosage_start_date == '' ||
    data.medications_prescribed == '' ||
    data.nature_of_illness == '' ||
    data.snooze_reminder == ''

  return (
    <div>
      <DashboardHeader message='Medical Detail' />
      <div className='px-10 py-5 lg:pt-20 lg:max-w-[700px] lg:ml-20'>
        <form>
          <div className='grid lg:grid-cols-2  gap-5 w-full'>
            <div className='form-control mb-5'>
              <label
                className='mb-1 block text-sm font-medium'
                htmlFor='nature_of_illness'
              >
                Nature of Illness
              </label>

              <input
                type='text'
                name='nature_of_illness'
                id='nature_of_illness'
                className='bg-white50 w-full h-12 rounded-lg px-3'
                value={data.nature_of_illness}
                onChange={handleChange}
              />
            </div>
            <div className='form-control mb-5'>
              <label
                className='mb-1 block text-sm font-medium'
                htmlFor='data_of_diagostics'
              >
                Date of Diagnostics
              </label>

              <input
                type='date'
                name='data_of_diagostics'
                id='data_of_diagostics'
                className='bg-white50 w-full h-12 rounded-lg px-3'
                value={data.data_of_diagostics}
                onChange={handleChange}
              />
            </div>
            <div className='form-control mb-5'>
              <label
                className='mb-1 block text-sm font-medium'
                htmlFor='medications_prescribed'
              >
                Medications Prescribed
              </label>

              <input
                type='text'
                name='medications_prescribed'
                id='medications_prescribed'
                className='bg-white50 w-full h-12 rounded-lg pl-4'
                value={data.medications_prescribed}
                onChange={handleChange}
              />
            </div>
            <div className='form-control mb-5'>
              <label
                className='mb-1 block text-sm font-medium'
                htmlFor='dosage_interval'
              >
                Dosage Interval
              </label>
              <select
                onChange={handleChange}
                value={data.dosage_interval}
                className='w-full h-12 bg-white50 rounded-lg px-3'
                name='dosage_interval'
                id='dosage_interval'
              >
                <option selected value='Every 1 hour'>
                  Every 1 hour
                </option>
                <option selected value='Every 2 hour'>
                  Every 2 hour
                </option>
                <option selected value='Every 3 hour'>
                  Every 3 hour
                </option>
                <option selected value='Every 4 hour'>
                  Every 4 hour
                </option>
              </select>
            </div>
            <div className='form-control mb-5'>
              <label
                className='mb-1 block text-sm font-medium'
                htmlFor='dosage_start_date'
              >
                Dosage Start Date
              </label>

              <input
                type='date'
                name='dosage_start_date'
                id='dosage_start_date'
                className='bg-white50 w-full h-12 rounded-lg px-3'
                value={data.dosage_start_date}
                onChange={handleChange}
              />
            </div>
            <div className='form-control mb-5'>
              <label
                className='mb-1 block text-sm font-medium'
                htmlFor='dosage_end_date'
              >
                Dosage End Date
              </label>

              <input
                type='date'
                name='dosage_end_date'
                id='dosage_end_date'
                className='bg-white50 w-full h-12 rounded-lg px-3'
                value={data.dosage_end_date}
                onChange={handleChange}
              />
            </div>
            <div className='form-control mb-5'>
              <label
                className='mb-1 block text-sm font-medium'
                htmlFor='snooze_reminder'
              >
                Snooze Reminder
              </label>
              <select
                onChange={handleChange}
                value={data.snooze_reminder}
                name='snooze_reminder'
                id='snooze_reminder'
                className='w-full h-12 bg-white50 rounded-lg px-3'
              >
                <option value='5 mins'>5 mins</option>
                <option value='10 mins'>10 mins</option>
                <option value='20 mins'>20 mins</option>
                <option value='30 mins'>30 mins</option>
              </select>
            </div>
          </div>
          <div className='lg:w-1/2 lg:mt-20'>
            <Button
              disabled={disabledBtn}
              type='submit'
              label={'Submit'}
              className='w-full '
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Medical
