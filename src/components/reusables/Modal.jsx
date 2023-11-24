import PropTypes from 'prop-types'
const Modal = ({ children, className, isModalOpen }) => {
  return (
    <div
      className={`bg-backdrop backdrop:blur-md fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center overflow-hidden transition-all duration-300 ${
        isModalOpen ? 'visible opacity-100' : 'hidden opacity-0'
      }`}
    >
      <div className={`z-50 ${className}`}>{children}</div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isModalOpen: PropTypes.bool,
}
export default Modal
