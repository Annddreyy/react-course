import React from "react";
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes['left-navigation']}>
			<ul className={classes.items}>
				<li>
					<a href="/profile" className={classes.item}>Profile</a>
				</li>
				<li>
					<a href="/messages" className={classes.item}>Messages</a>
				</li>
				<li>
					<a href="/music" className={classes.item}>Music</a>
				</li>
				<li>
					<a href="/settings" className={classes.item}>Settings</a>
				</li>
			</ul>
		</nav>
    )
};

export default Navbar;