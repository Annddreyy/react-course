import React from "react";
import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes['left-navigation']}>
			<ul className={classes.items}>
				<li>
					<NavLink to="/profile" className={({ isActive }) => isActive ? `${classes.item} ${classes.active}` : classes.item}>Профиль</NavLink>
				</li>
				<li>
					<NavLink to="/dialogs" className={({ isActive }) => isActive ? `${classes.item} ${classes.active}` : classes.item}>Сообщения</NavLink>
				</li>
				<li>
					<NavLink to="/news" className={({ isActive }) => isActive ? `${classes.item} ${classes.active}` : classes.item}>Новости</NavLink>
				</li>
				<li>
					<NavLink to="/music" className={({ isActive }) => isActive ? `${classes.item} ${classes.active}` : classes.item}>Музыка</NavLink>
				</li>
				<li>
					<NavLink to="/settings" className={({ isActive }) => isActive ? `${classes.item} ${classes.active}` : classes.item}>Настройки</NavLink>
				</li>
				<li>
					<NavLink to="/users" className={({ isActive }) => isActive ? `${classes.item} ${classes.active}` : classes.item}>Пользователи</NavLink>
				</li>
			</ul>
		</nav>
    )
};

export default Navbar;