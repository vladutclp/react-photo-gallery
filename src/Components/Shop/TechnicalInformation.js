import React from 'react';
import apertureIcon from '../../assets/aperture1.png';
import shutterSpeedIcon from '../../assets/shutter.png';
import isoIcon from '../../assets/iso1.png';
import focalIcon from '../../assets/focal.png';
import cameraIcon from '../../assets/camera1.png';
import classes from './TechnicalInformation.module.scss'

const TechnicalInformation = ({
  aperture,
  camera,
  focalLength,
  iso,
  otherTechniques,
  shutterSpeed,
}) => {
  return (
    <div className={classes.technicalInfo}>
      <h2 className={classes.technicalInfo__title}>Technical info</h2>

      <div className={classes.cameraSettings}>
        <div className={classes.cameraSettings__group}>
          <img
            className={classes.cameraSettings__icon}
            src={cameraIcon}
            alt=''
          />
          <span className={classes.cameraSettings__value}>{camera}</span>
        </div>
        <div className={classes.cameraSettings__group}>
          <img
            className={classes.cameraSettings__icon}
            src={apertureIcon}
            alt=''
          />
          <span className={classes.cameraSettings__value}>{aperture}</span>
        </div>
        <div className={classes.cameraSettings__group}>
          <img
            className={classes.cameraSettings__icon}
            src={shutterSpeedIcon}
            alt=''
          />
          <span className={classes.cameraSettings__value}>{shutterSpeed}</span>
        </div>
        <div className={classes.cameraSettings__group}>
          <img className={classes.cameraSettings__icon} src={isoIcon} alt='' />
          <span className={classes.cameraSettings__value}>{iso}</span>
        </div>
        <div className={classes.cameraSettings__group}>
          <img
            className={classes.cameraSettings__icon}
            src={focalIcon}
            alt=''
          />
          <span className={classes.cameraSettings__value}>{focalLength} mm</span>
        </div>
        <div>{otherTechniques}</div>
      </div>
    </div>
  );
};


export default TechnicalInformation;