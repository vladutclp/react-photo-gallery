import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <main>
        <h1>Welcome to home page</h1>
      </main>
      <nav>
        <Link to='/gallery'>Gallery</Link>
      </nav>
    </div>
  );
};

export default Home;
