import React, { useState } from 'react';
import Navlinks from './NavLinks';
import classes from './NavBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// import {} from '@fortawesome/fontawesome-svg-core'
import {faWindowClose} from '@fortawesome/free-regular-svg-icons'
// import {} from '@fortawesome/'

const Mobilenavigation = () => {
	const [open, setOpen] = useState(false);
	return (
		<nav className={classes.mobileNavigation}>
			{open && <Navlinks closeNavBar={() => setOpen(false)} />}
			{!open && <FontAwesomeIcon onClick={() => setOpen(true)} className={classes.mobileNavigation__icon} icon={faBars} color="white" size='4x'/>}
			{open && <FontAwesomeIcon onClick={() => setOpen(false)} className={classes.mobileNavigation__icon} icon={faTimes} color='white' size='4x'/>}
		</nav>
	);
}

export default Mobilenavigation;
