import PropTypes from 'prop-types'
import { forwardRef } from 'react'

const Input = forwardRef(function Input(
  { className, value, type, placeholder, onChange, name },
  ref
) {
  return (
    <input
      className={`border  bg-white50 focus:bg-[#D4FFE0] focus:outline-none h-12 rounded-[10px] px-4 placeholder:text-dark10 text-dark20 focus:border-[#027600] text-sm transition-all delay-300 ${className} ${
        value !== '' ? 'border-[#027600] bg-[#D4FFE0]' : 'border-white50'
      }`}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      ref={ref}
    />
  )
})

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
}

Input.displayName = 'Input'

export default Input
