import React from 'react';
import { NavLink } from 'react-router-dom';
import mountainLogo from '../../../assets/mountains.png';
import classes from './NavBar.module.scss';
import { BORDER_COLOR, FONT_COLOR } from '../../../constants';

const Navlinks = (props) => {
	const activeStyle = {
		borderBottom: `2px solid ${BORDER_COLOR}`,
	};

	return (
		<>
			{/* <NavLink to='/' >
				<div className={classes.navbar__logo}>
					<img
						className={classes.navbar__logoImage}
						src={mountainLogo}
						alt=''
					/>
					<div className={classes.navbar__logoLabel}>Clapou Vladut</div>
				</div>
			</NavLink> */}
			<NavLink
				className={classes.navbar__link}
				to='/'
				style={({ isActive }) => (isActive ? activeStyle : undefined)}
				onClick={props.closeNavBar}
			>
				Home
			</NavLink>
			<NavLink
				style={({ isActive }) => (isActive ? activeStyle : undefined)}
				className={classes.navbar__link}
				to='/gallery'
				onClick={props.closeNavBar}

			>
				Gallery
			</NavLink>
			<NavLink
				style={({ isActive }) => (isActive ? activeStyle : undefined)}
				className={classes.navbar__link}
				onClick={props.closeNavBar}
				to='/shop'
			>
				Shop
			</NavLink>
			{/* <NavLink
				style={({ isActive }) => (isActive ? activeStyle : undefined)}
				className={classes.navbar__link}
				onClick={props.closeNavBar}
				to='/aboutme'
			>
				About me
			</NavLink> */}
			<NavLink
				style={({ isActive }) => (isActive ? activeStyle : undefined)}
				className={classes.navbar__link}
				onClick={props.closeNavBar}
				to='/contact'
			>
				Contact
			</NavLink>
			<NavLink
				style={({ isActive }) => (isActive ? activeStyle : undefined)}
				className={classes.navbar__link}
				onClick={props.closeNavBar}
				to='/cart'
			>
				Cart
			</NavLink>
		</>
	);
}

export default Navlinks;
