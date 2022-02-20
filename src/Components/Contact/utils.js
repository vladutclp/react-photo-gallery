import classes from './Contact.module.scss';

const errorClass = error => error.length === 0 ? '' : classes.form__invalidField;


export const getFormGroupClassname = (type,  formErrors, userData) => {
  let className = '';
  
  if (type === 'message') {
    className = `${classes.form__group} ${errorClass(formErrors[type])} ${
      userData[type].length > 10 ? classes.form__validField : ''
    }`;
  }

  return (className = `${classes.form__group} ${errorClass(formErrors[type])} ${
    userData[type].length > 1 ? classes.form__validField : ''
  }`);
};

export const getErrorMessage = (inputData, validField, type) => {
  if (!inputData[type] && !validField[type])
    return <p className={classes.emptyError}>* This field is required</p>;
  return null;
};