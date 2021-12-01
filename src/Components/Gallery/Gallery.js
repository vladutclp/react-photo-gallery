import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import clalsses from './Gallery.module.scss';


const Gallery = () => {
  const getPhotoElements =  (photoData, photoSize) => {
    console.log('from getPhotoElements');
    console.log(photoData);
    if (photoData) {
      return photoData.map((photo) => {
        return <img key={photo.id} src={photo.smallSize} alt='' />;
      });
    }
    return null;
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
      console.log(photoData)
      const transformedData = photoData.map((photo) => {
        return {
          id: photo.id,
          regularSize: photo.urls.regular,
          smallSize: photo.urls.small,
          thumbSize: photo.urls.thumb,
        };
      });
      console.log('transformedData')
      console.log(transformedData)
      if (transformedData) {
        setPhotoData(transformedData);
      }
    };

    fetchPhotos();
  
  }, []);

  return (
    <div className={clalsses.gallery}>
      <section>{getPhotoElements(photoData)}</section>
    </div>
  );
};

export default Gallery;
