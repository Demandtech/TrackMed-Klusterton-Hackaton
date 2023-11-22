import PropTypes from 'prop-types'
const Button = ({ label, type, className, disabled, onclick }) => {
  return (
    <button
      disabled={disabled}
      className={`rounded-[10px] disabled:shadow-[0px 0px 7px 1px rgba(53, 188, 91, 0.50)] py-4 bg-primary100 disabled:cursor-not-allowed disabled:bg-primary50 ${className} text-white50 text-sm transition-all delay-300`}
      type={type}
      onClick={onclick}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onclick: PropTypes.func,
}
export default Button
