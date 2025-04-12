import React from "react";
import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import User from "./User/User";

const Navbar = (props) => {
	let state = props.sidebar;

	let users = state.users.map(user => <User name={user.name} id={user.id} />);
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
				<li>
					<NavLink to="/users" className={({ isActive }) => isActive ? `${classes.item} ${classes.active}` : classes.item}>Users</NavLink>
				</li>
			</ul>
			<div className="users">
				{ users }
			</div>
		</nav>
    )
};

export default Navbar;