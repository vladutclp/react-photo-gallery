import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Button from '../UI/Button/Button';
import classes from './Contact.module.scss';
import { FIELD_NAMES, FIELD_TYPES } from '../../constants';
import { getErrorMessage, getFormGroupClassname } from './utils';

const Contact = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    notify();
  };

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

  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    message: '',
    subject: '',
    email: '',
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const [fieldIsValid, setFieldIsValid] = useState({
    email: true,
    lastName: true,
    message: true,
    name: true,
    subject: true,
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    lastName: '',
    message: '',
    name: '',
    subject: '',
  });

  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let fieldValidationErrors = formErrors;
    let fieldValid = fieldIsValid;

    switch (fieldName) {
      case FIELD_NAMES.EMAIL:
        fieldValid[fieldName] = value.match(
          /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
        )
          ? true
          : false;
        fieldValidationErrors[fieldName] = fieldValid[fieldName]
          ? ''
          : ' is invalid';
        break;
      case FIELD_NAMES.NAME:
      case FIELD_NAMES.LASTNAME:
      case FIELD_NAMES.SUBJECT:
        fieldValid[fieldName] = value.trim().length > 1;
        fieldValidationErrors[fieldName] = fieldValid[fieldName]
          ? ''
          : ' is too short or has too many white spaces';
        break;
      case FIELD_NAMES.MESSAGE:
        fieldValid[fieldName] = value.trim().length > 10;
        fieldValidationErrors[fieldName] = fieldValid[fieldName]
          ? ''
          : ' is too short or has too many white spaces';
      default:
        break;
    }

    setFormErrors((prevSatate) => ({ ...prevSatate, fieldValidationErrors }));
    setFieldIsValid((prevSatate) => ({ ...prevSatate, fieldValid }));
    checkFormValidity(fieldValid);
  };

  const checkFormValidity = () => {
    let formIsValid = true;
    for (let field in fieldIsValid) {
      if (!fieldIsValid[field]) formIsValid = false;
    }
    setFormIsValid(formIsValid);
  };

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
          <div
            className={getFormGroupClassname(
              FIELD_NAMES.NAME,
              formErrors,
              userData
            )}
          >
            {getErrorMessage(userData, fieldIsValid, FIELD_NAMES.NAME)}
            <input
              className={`${classes.form__input} `}
              onChange={handleUserInput}
              onBlur={() =>
                validateField(FIELD_NAMES.NAME, userData[FIELD_NAMES.NAME])
              }
              value={userData[FIELD_NAMES.NAME]}
              type={FIELD_TYPES.TEXT}
              name={FIELD_NAMES.NAME}
              placeholder='Name'
            />
            <label className={classes.form__label} htmlFor={FIELD_NAMES.NAME}>
              Name {formErrors[FIELD_NAMES.NAME]}
            </label>
          </div>

          <div
            className={getFormGroupClassname(
              FIELD_NAMES.LASTNAME,
              formErrors,
              userData
            )}
          >
            {getErrorMessage(userData, fieldIsValid, FIELD_NAMES.LASTNAME)}
            <input
              className={classes.form__input}
              onBlur={() =>
                validateField(FIELD_NAMES.LASTNAME, userData[FIELD_NAMES.LASTNAME])
              }
              onChange={handleUserInput}
              value={userData[FIELD_NAMES.LASTNAME]}
              type={FIELD_TYPES.TEXT}
              name={FIELD_NAMES.LASTNAME}
              placeholder='Last name'
            />
            <label
              className={classes.form__label}
              htmlFor={FIELD_NAMES.LASTNAME}
            >
              Last Name {formErrors[FIELD_NAMES.LASTNAME]}
            </label>
          </div>
        </div>

        <div
          className={getFormGroupClassname(
            FIELD_NAMES.EMAIL,
            formErrors,
            userData
          )}
        >
          {getErrorMessage(userData, fieldIsValid, FIELD_NAMES.EMAIL)}
          <input
            className={classes.form__input}
            onBlur={() =>
              validateField(FIELD_NAMES.EMAIL, userData[FIELD_NAMES.EMAIL])
            }
            onChange={handleUserInput}
            value={userData[FIELD_NAMES.EMAIL]}
            type={FIELD_TYPES.EMAIL}
            name={FIELD_NAMES.EMAIL}
            placeholder='Email'
          />
          <label className={classes.form__label} htmlFor={FIELD_NAMES.EMAIL}>
            Email {formErrors[FIELD_NAMES.EMAIL]}
          </label>
        </div>

        <div
          className={getFormGroupClassname(
            FIELD_NAMES.SUBJECT,
            formErrors,
            userData
          )}
        >
          {getErrorMessage(userData, fieldIsValid, FIELD_NAMES.SUBJECT)}
          <input
            className={classes.form__input}
            onBlur={() =>
              validateField(FIELD_NAMES.SUBJECT, userData[FIELD_NAMES.SUBJECT])
            }
            onChange={handleUserInput}
            value={userData[FIELD_NAMES.SUBJECT]}
            type={FIELD_TYPES.TEXT}
            name={FIELD_NAMES.SUBJECT}
            placeholder='Subject'
          />
          <label className={classes.form__label} htmlFor={FIELD_NAMES.SUBJECT}>
            Subject {formErrors[FIELD_NAMES.SUBJECT]}
          </label>
        </div>

        <div
          className={getFormGroupClassname(
            FIELD_NAMES.MESSAGE,
            formErrors,
            userData
          )}
        >
          {getErrorMessage(userData, fieldIsValid, FIELD_NAMES.MESSAGE)}
          <textarea
            className={classes.form__input}
            name={FIELD_NAMES.MESSAGE}
            placeholder='Message'
            rows='3'
            spellCheck={false}
            onBlur={() =>
              validateField(FIELD_NAMES.MESSAGE, userData[FIELD_NAMES.MESSAGE])
            }
            onChange={handleUserInput}
            value={userData[FIELD_NAMES.MESSAGE]}
          />
          <label className={classes.form__label} htmlFor={FIELD_NAMES.MESSAGE}>
            Message {formErrors[FIELD_NAMES.MESSAGE]}
          </label>
        </div>

        <Button
          clickHandler={submitHandler}
          className={classes.form__submit}
          label={'Send message'}
          disabled={!formIsValid}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Contact;
