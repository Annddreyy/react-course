import React from "react";
import classes from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
			<img src="https://jnsenfeng.ru/images/vk.png" alt=""></img>
            <div>
                { props.isAuth ? <span>{props.login}</span> : <NavLink to="/login">Login</NavLink> }
            </div>
		</header>
    )
};

export default Header;