import { Listbox } from '@headlessui/react'
import { FaCheck } from 'react-icons/fa6'
import { IoChevronDownOutline } from 'react-icons/io5'
import PropTypes from 'prop-types'

const Select = ({ list, setSelectedItem, selectedItem }) => {
  return (
    <Listbox value={selectedItem} onChange={setSelectedItem}>
      <Listbox.Button className='w-full bg-white50 h-12 text-left px-3 rounded-md flex items-center justify-between focus:outline outline-primary100'>
        <span>{selectedItem}</span>
        <IoChevronDownOutline />
      </Listbox.Button>
      <Listbox.Options className='bg-white50 mt-2 rounded-md absolute w-full overflow-scroll shadow-aside transition ease-in-out duration-150 z-50'>
        {list.map((interval) => {
          return (
            <Listbox.Option
              key={interval}
              className='cursor-pointer'
              value={interval}
            >
              {({ active, selected }) => {
                return (
                  <div
                    className={`flex items-center py-2 px-3 transition-all duration-300 border overflow-hidden  ${
                      active ? 'bg-[#82f4a2]' : 'transparent'
                    } `}
                  >
                    <span>{interval}</span>
                    {selected && <FaCheck className='ml-auto text-primary80' />}
                  </div>
                )
              }}
            </Listbox.Option>
          )
        })}
      </Listbox.Options>
    </Listbox>
  )
}

Select.propTypes = {
  list: PropTypes.array.isRequired,
  selectedItem: PropTypes.string.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
}

export default Select
