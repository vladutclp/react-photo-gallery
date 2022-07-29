import { NavLink } from 'react-router-dom';
import MobileNavigation from './MobileNavigation';
import classes from './NavBar.module.scss';
import Navigation from './Navigation';
import Navlinks from './NavLinks';
const NavBar = () => {
  
  return (
    <div className={classes.navbar}>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default NavBar;
