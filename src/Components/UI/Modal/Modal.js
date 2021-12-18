import classes from './Modal.module.scss';

const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <>
      <div className={classes.overlay} onClick={onClose}></div>
      <div className={classes.modal}>
        {children}
      </div>
    </>
  );
};


export default Modal;