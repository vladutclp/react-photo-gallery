import React, { useState } from 'react';
import classes from './ImageCard.module.scss';

const ImageCard = ({ image }) => {
  return (
    <div className={classes.imageCard}>
      <div className={classes.imageWrapper}>
        <img className={classes.imageCard__image} src={image.url} />
      </div>

      <div className={classes.imageCard__label}>{image.label}</div>

    </div>
  );
};

export default ImageCard;
