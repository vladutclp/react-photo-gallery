import classes from './Modal.module.scss';

const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <>
      <div style={classes.overlay} onClick={onClose}></div>
      <div style={classes.modal}>
        {children}
      </div>
    </>
  );
};


export default Modal;