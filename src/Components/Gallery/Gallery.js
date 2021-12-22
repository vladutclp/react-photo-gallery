import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import ImageCarousel from '../UI/ImageCarousel/ImageCarousel';
import Modal from '../UI/Modal/Modal';
import clalsses from './Gallery.module.scss';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (photoData) => {
    console.log('clicked ', photoData);
    setIsOpen(true);
    setCurrentImage(photoData);
  };
  const getPhotoElements = (photoData, photoSize) => {
    console.log('from getPhotoElements');
    console.log(photoData);
    if (photoData) {
      return photoData.map((photo) => {
        return (
          <img
            onClick={() => handleImageClick(photo)}
            key={photo.id}
            src={photo.smallSize}
            alt=""
          />
        );
      });
    }
    return null;
  };

  const getRegularSizeImages = (imageData) => {
    if (!imageData) return null;
    const regularSizeImages = imageData.map((image) => image.regularSize);
    console.log(regularSizeImages);

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
      console.log('transformedData');
      console.log(transformedData);
      if (transformedData) {
        setPhotoData(transformedData);
      }
    };

    fetchPhotos();
  }, []);

  const images = getRegularSizeImages(photoData);

  return (
    <div
      className={clalsses.gallery}
      style={{ zIndex: 10, position: 'relative' }}
    >
      <section>{getPhotoElements(photoData)}</section>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ImageCarousel images={images} />
      </Modal>
    </div>
  );
};

export default Gallery;
