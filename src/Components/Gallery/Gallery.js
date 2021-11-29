import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Gallery = () => {
  // useEffect(() => {
  //   fetch('https://api.unsplash.com/photos?page=1')
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         console.log(result)
  //       }
  //     );
  // }, []);

  return (
    <div>
      <main>Welcome to gallery!</main>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </div>
  );
};

export default Gallery;
