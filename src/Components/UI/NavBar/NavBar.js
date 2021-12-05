import { NavLink } from 'react-router-dom';
import { BORDER_COLOR, FONT_COLOR } from '../../../constants';
import classes from './NavBar.module.scss';

const NavBar = () => {
  const activeStyle = {
    borderBottom: ` 3px solid ${BORDER_COLOR}`,
    color: FONT_COLOR
  };
  return (
    <nav className={classes.navbar}>
      <NavLink
        className={classes.navbar__link}
        to='/'
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={classes.navbar__link}
        to='/gallery'
      >
        Gallery
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={classes.navbar__link}
        to='/shop'
      >
        Shop
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={classes.navbar__link}
        to='/aboutme'
      >
        About me
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={classes.navbar__link}
        to='/contact'
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default NavBar;
