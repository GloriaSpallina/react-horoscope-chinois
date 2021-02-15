import './modal.css';
import PropTypes from 'prop-types';

const Modal = ({
  children, title, visible, closeModal,
}) => {
  const clazz = `modal-overlay ${visible ? 'block' : 'hidden'}`;
  return (
    <div className={clazz}>
      <div className="modal fixed top-1/2 left-1/2 bg-red-500">
        <div className="flex justify-between">
          <h2>{title}</h2>
          <button onClick={closeModal} type="button">x</button>
        </div>

        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,

};

export default Modal;
