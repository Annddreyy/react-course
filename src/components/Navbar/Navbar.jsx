import React from "react";
import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes['left-navigation']}>
			<ul className={classes.items}>
				<li>
					<NavLink to="/profile" className={({ isActive }) => isActive ? `${classes.item} ${classes.active}` : classes.item}>Profile</NavLink>
				</li>
				<li>
					<NavLink to="/dialogs" className={({ isActive }) => isActive ? `${classes.item} ${classes.active}` : classes.item}>Messages</NavLink>
				</li>
				<li>
					<NavLink to="/news" className={({ isActive }) => isActive ? `${classes.item} ${classes.active}` : classes.item}>News</NavLink>
				</li>
				<li>
					<NavLink to="/music" className={({ isActive }) => isActive ? `${classes.item} ${classes.active}` : classes.item}>Music</NavLink>
				</li>
				<li>
					<NavLink to="/settings" className={({ isActive }) => isActive ? `${classes.item} ${classes.active}` : classes.item}>Settings</NavLink>
				</li>
			</ul>
		</nav>
    )
};

export default Navbar;