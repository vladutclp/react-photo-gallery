import { Link } from 'react-router-dom';

const Gallery = () => {
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
