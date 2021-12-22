import React, { useState } from 'react';
import classes from './ImageCard.module.scss';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Button from '../UI/Button/Button';

const ImageCard = ({ buttonAction, image }) => {

  const [isHovered, setIsHovered] = useState(false);
  console.log('component rerenders');

  return (
    <div
      className={classes.ImageCard}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className={isHovered ? classes.ImageCard__ImageHover : null}
        src={image.url}
        alt=""
      />

      <div className={classes.ImageCard__Metadata}>
        {image.label && (
          <div className={classes.ImageCard__Label}>{image.label}</div>
        )}
        {image.price && (
          <div className={classes.ImageCard__Price}>from {image.price}</div>
        )}
      </div>
      {isHovered ? (
        <Button
          clickHandler={buttonAction}
          label={'Add to cart'}
          icon={faShoppingCart}
        ></Button>
      ) : null}
    </div>
  );
};

export default ImageCard;
