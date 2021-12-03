import { useState } from 'react';
import classes from './ImageCarousel.module.scss';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IMAGES = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80',
  'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1213&q=80',
  'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80',
  'https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1177&q=80',
];

const ImageCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const leftButtonHandler = () => {
    if (imgIndex === 0) {
      setImgIndex(IMAGES.length - 1);
    } else {
      setImgIndex(imgIndex - 1);
    }
  };

  const rightButtonHandler = () => {
    if (imgIndex === IMAGES.length - 1) {
      setImgIndex(0);
    } else {
      setImgIndex(imgIndex + 1);
    }
  };

  return (
    <div className={classes.imageCarousel}>
      <button
        className={`${classes.imageCarousel__button} ${classes.imageCarousel__buttonLeft}`}
        onClick={leftButtonHandler}
      >
        <FontAwesomeIcon icon={faArrowLeft} size="2x" color="white"/>
      </button>
      <img
        className={classes.imageCarousel__image}
        src={IMAGES[imgIndex]}
        key={IMAGES[imgIndex]}
        alt=''
      />
      <button
        className={`${classes.imageCarousel__button} ${classes.imageCarousel__buttonRight}`}
        onClick={rightButtonHandler}
      >
        <FontAwesomeIcon icon={faArrowRight} size="2x" color="white"/>
      </button>
    </div>
  );
};

export default ImageCarousel;
