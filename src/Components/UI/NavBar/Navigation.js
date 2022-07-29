import React from 'react';
import Navlinks from './NavLinks';
import classes from './NavBar.module.scss';

const Navigation = () => {
	return (
		<nav className={classes.navigation}>
			<Navlinks />
		</nav>
	);
}

export default Navigation;
