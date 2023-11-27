import { useState, useEffect } from 'react'
import { DashboardHeader, Select } from '../../components'
import { Button } from '../../components/reusables'
import { intervals, snoozeds, modeOfReminder } from '../../utils/medical'

const Medical = () => {
  const [selectedItem, setSelectedItem] = useState(intervals[0])
  const [selectedSnoozed, setSelectedSnoozed] = useState(snoozeds[0])
  const [selectedMode, setSelectedMode] = useState(modeOfReminder[0])

  const [data, setData] = useState({
    nature_of_illness: '',
    data_of_diagostics: '',
    medications_prescribed: '',
    dosage_start_date: '',
    dosage_end_date: '',
    snooze_reminder: selectedSnoozed,
    dosage_interval: selectedItem,
    notification_mode: selectedMode,
  })

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    setData({
      ...data,
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
    data.snooze_reminder == '' ||
    data.notification_mode == ''

  useEffect(() => {
    setData({
      ...data,
      snooze_reminder: selectedSnoozed,
      dosage_interval: selectedItem,
      notification_mode: selectedMode,
    })
  }, [selectedItem, selectedSnoozed, selectedMode])

  return (
    <div>
      <DashboardHeader message='Medical Detail' />
      <div className='px-10 py-5 lg:pt-20 lg:max-w-[700px] lg:ml-20'>
        <form>
          <div className='grid lg:grid-cols-2  gap-5 w-full'>
            <div className='form-control mb-5 w-full'>
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
                className='bg-white50 w-full h-12 rounded-lg px-3 focus:outline-2 outline-primary100'
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
                className='bg-white50 w-full h-12 rounded-lg px-3 focus:outline-2 outline-primary100'
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
                className='bg-white50 w-full h-12 rounded-lg pl-4 focus:outline-2 outline-primary100'
                value={data.medications_prescribed}
                onChange={handleChange}
              />
            </div>
            <div className='form-control mb-5 relative w-full'>
              <label
                className='mb-1 block text-sm font-medium'
                htmlFor='dosage_interval'
              >
                Dosage Interval
              </label>
              <Select
                list={intervals}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            </div>
            <div className='form-control mb-5 w-full'>
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
                className='bg-white50 w-full h-12 rounded-lg px-3 focus:outline-2 outline-primary100'
                value={data.dosage_start_date}
                onChange={handleChange}
              />
            </div>
            <div className='form-control mb-5 w-full'>
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
                className='bg-white50 w-full h-12 rounded-lg px-3 focus:outline-2 outline-primary100'
                value={data.dosage_end_date}
                onChange={handleChange}
              />
            </div>
            <div className='form-control mb-5 w-full relative'>
              <label
                className='mb-1 block text-sm font-medium'
                htmlFor='snooze_reminder'
              >
                Snooze Reminder
              </label>
              <Select
                list={snoozeds}
                setSelectedItem={setSelectedSnoozed}
                selectedItem={selectedSnoozed}
              />
            </div>
            <div className='form-control mb-5 w-full relative'>
              <label
                className='mb-1 block text-sm w-full font-medium'
                htmlFor='snooze_reminder'
              >
                Mode of reminder
              </label>
              <Select
                list={modeOfReminder}
                setSelectedItem={setSelectedMode}
                selectedItem={selectedMode}
              />
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
