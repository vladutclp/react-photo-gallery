import React, { useState } from 'react';
import classes from './ImageCard.module.scss';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Button from '../UI/Button/Button';
import { connect } from 'react-redux';
import { addToCart } from '../../store/Shopping/shopping-actions';

const ImageCard = ({ addToCart, image }) => {
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
        alt=''
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
          clickHandler={() => addToCart(image.id)}
          label={'Add to cart'}
          icon={faShoppingCart}
        ></Button>
      ) : null}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(ImageCard);
