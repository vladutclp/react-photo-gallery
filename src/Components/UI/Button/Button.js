import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classes from './Button.module.scss';

const Button = (props) => {
  return (
    <button className={`${classes.button} ${props.className}`} onClick={props.clickHandler}>
      <span> {props.icon && <FontAwesomeIcon icon={props.icon} />}</span>
      <span className={classes.button__label}>{props.label}</span>
    </button>
  );
};

export default Button;
