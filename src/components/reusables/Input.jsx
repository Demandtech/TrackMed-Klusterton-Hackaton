import PropTypes from 'prop-types'

const Input = ({ className, value, type, placeholder, onchange }) => {
  return (
    <input
      className={`border border-white50 bg-white50 focus:bg-[#D4FFE0] focus:outline-none h-12 rounded-[10px] px-4 placeholder:text-dark10 text-dark20 focus:border-[#027600] text-sm transition-all delay-300 ${className}`}
      onChange={onchange}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  )
}
Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onchange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
}
export default Input
