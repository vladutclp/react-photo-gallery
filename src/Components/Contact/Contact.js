import Button from '../UI/Button/Button';
import classes from './Contact.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';

const Contact = () => {

  let navigate = useNavigate();
  const redirectToHome = () => {
    let path = '/'
    navigate(path)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('message was sent')
    notify();
    redirectToHome();
  }

  const notify = () =>
  toast.success('Message sent!', {
    position: 'top-center',
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  return (
    <div className={classes.contact}>
      <ToastContainer />
      <div className={classes.description}>
        <div className={classes.description__heading}>Get in touch</div>
        <div className={classes.description__text}>
          If you have any questions regarding my gear, workflow or prints don't
          heistate to contact me. You can reach me via email with or on my
          social media accounts.
        </div>
      </div>
      <form action='' className={classes.form} autoComplete='off'>
        <div className={classes.form__nameFields}>
          <div className={classes.form__group}>
            <input
              className={classes.form__input}
              type='text'
              name='name'
              placeholder='Name'
              required
            />
            <label className={classes.form__label} htmlFor='name'>
              Name
            </label>
          </div>
          <div className={classes.form__group}>
            <input
              className={classes.form__input}
              type='text'
              name='lastName'
              placeholder='Last name'
              required
            />
            <label className={classes.form__label} htmlFor='lastName'>
              Last Name
            </label>
          </div>
        </div>
        <div className={classes.form__group}>
          <input
            className={classes.form__input}
            type='email'
            name='email'
            placeholder='Email'
            required
          />
          <label className={classes.form__label} htmlFor='email'>
            Email
          </label>
        </div>
        <div className={classes.form__group}>
          <input
            className={classes.form__input}
            type='text'
            name='subject'
            placeholder='Subject'
            required
          />
          <label className={classes.form__label} htmlFor='subject'>
            Subject
          </label>
        </div>

        <div className={classes.form__group}>
          <textarea
            className={classes.form__input}
            name='Message'
            cols='30'
            rows='3'
            placeholder='Message'
            required
          />
          <label className={classes.form__label} htmlFor='message'>
            Message
          </label>
        </div>

        <Button clickHandler={submitHandler} className={classes.form__submit} label={'Send message'}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Contact;
