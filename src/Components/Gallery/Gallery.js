import { useEffect, useState } from 'react';
import ImageCarousel from '../UI/ImageCarousel/ImageCarousel';
import classes from './Gallery.module.scss';

const Gallery = () => {
  const [showCarousel, setshowCarousel] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const handleImageClick = (photoIndex) => {
    setshowCarousel(true);
    setCurrentImageIndex(photoIndex);
  };
  const getPhotoElements = (photoData, photoSize) => {
    if (photoData) {
      return photoData.map((photo, index) => {
        return (
          <img
            className={classes.gallery__image}
            onClick={() => handleImageClick(index)}
            key={photo.id}
            src={photo.smallSize}
            alt=''
          />
        );
      });
    }
    return null;
  };

  const getRegularSizeImages = (imageData) => {
    if (!imageData) return null;
    const regularSizeImages = imageData.map((image) => image.regularSize);
    return regularSizeImages;
  };

  const [photoData, setPhotoData] = useState();
  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch('https://api.unsplash.com/photos?page=1', {
        headers: {
          Authorization:
            'Client-ID 2IJhGC9QLiwhk3GLACKbd3nv2jWjEUXL_BQYHgW4a58',
        },
      });
      const photoData = await response.json();
      console.log(photoData);
      const transformedData = photoData.map((photo) => {
        return {
          id: photo.id,
          regularSize: photo.urls.regular,
          smallSize: photo.urls.small,
          thumbSize: photo.urls.thumb,
        };
      });
      if (transformedData) {
        setPhotoData(transformedData);
      }
    };

    fetchPhotos();
  }, []);

  const images = getRegularSizeImages(photoData);

  return (
    <div
      className={classes.gallery}
    >
      <section>{getPhotoElements(photoData)}</section>
      {showCarousel ? <ImageCarousel currentImageIndex={currentImageIndex} hideCarousel={() => setshowCarousel(false)} images={images} /> : null}
    </div>
  );
};

export default Gallery;
