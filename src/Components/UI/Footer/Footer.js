import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, fa500px } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import classes from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer__socialMedia}>
        <FontAwesomeIcon icon={faInstagram}  />
        <FontAwesomeIcon icon={fa500px}  />
      </div>
      <div className={classes.footer__copyright}>
        <FontAwesomeIcon icon={faCopyright}  /> | Clapou Vladut -
        Landscape Photographer
      </div>
    </div>
  );
};

export default Footer;
