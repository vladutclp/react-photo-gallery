import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/gallery'>Gallery</Link>
      <Link to='/shop'>Shop</Link>
      <Link to='/aboutme'>About me</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
  );
};

export default NavBar;
