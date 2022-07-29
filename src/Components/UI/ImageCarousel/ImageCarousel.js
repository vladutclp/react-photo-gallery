import { useState, useEffect } from 'react';
import classes from './ImageCarousel.module.scss';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ImageCarousel = ({ currentImageIndex, images, hideCarousel }) => {
  window.onkeydown = (e) => {
    console.log(e);
    if (e.keyCode === 37) {
      leftButtonHandler(e);
    }
    if (e.keyCode === 39) {
      rightButtonHandler(e);
    }
    if (e.keyCode === 27) {
      hideCarousel();
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
    // onClick={hideCarousel}
    >
      <button
        onClick={hideCarousel}
        className={`${classes.imageCarousel__button} ${classes.imageCarousel__closeButton}`}>
        <FontAwesomeIcon className={classes.imageCarousel__icon} icon={faTimes} />
      </button>
      <button
        className={`${classes.imageCarousel__button} ${classes.imageCarousel__buttonLeft}`}
        onClick={leftButtonHandler}
      >
        <FontAwesomeIcon className={classes.imageCarousel__icon} icon={faChevronLeft} />
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
        <FontAwesomeIcon className={classes.imageCarousel__icon} icon={faChevronRight} />
      </button>
    </div>
  );
};

export default ImageCarousel;
