import { useState, useEffect } from 'react';
import classes from './ImageCarousel.module.scss';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ImageCarousel = ({ action, currentImageIndex, images }) => {
  window.onkeydown = (e) => {
    console.log(e);
    if (e.keyCode === 37) {
      leftButtonHandler(e);
    }
    if (e.keyCode === 39) {
      rightButtonHandler(e);
    }
  };

  const [imgIndex, setImgIndex] = useState(currentImageIndex);
  const leftButtonHandler = (e) => {
    e.stopPropagation();
    if (imgIndex === 0) {
      setImgIndex(images.length - 1);
    } else {
      setImgIndex(imgIndex - 1);
    }
  };

  const rightButtonHandler = (e) => {
    e.stopPropagation();
    if (imgIndex === images.length - 1) {
      setImgIndex(0);
    } else {
      setImgIndex(imgIndex + 1);
    }
  };

  return (
    <div
      className={classes.imageCarousel}
      onClick={action}
    >
      <button
        className={`${classes.imageCarousel__button} ${classes.imageCarousel__buttonLeft}`}
        onClick={leftButtonHandler}
      >
        <FontAwesomeIcon icon={faArrowLeft} size='3x' color='white' />
      </button>
      <img
        className={classes.imageCarousel__image}
        src={images[imgIndex]}
        key={images[imgIndex]}
        alt=''
      />
      <button
        className={`${classes.imageCarousel__button} ${classes.imageCarousel__buttonRight}`}
        onClick={rightButtonHandler}
      >
        <FontAwesomeIcon icon={faArrowRight} size='3x' color='white' />
      </button>
    </div>
  );
};

export default ImageCarousel;
