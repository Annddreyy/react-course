import React from "react";
import classes from './Header.module.css';
import { NavLink } from "react-router-dom";

type PropsType = {
    isAuth: boolean,
    login: string | null,
    logoutUserThunkCreator: () => void,
};

const Header = ({ isAuth, logoutUserThunkCreator, login }: PropsType) => {
    return (
        <header className={classes.header}>
			<img src="https://jnsenfeng.ru/images/vk.png" alt=""></img>
            <div>
                { 
                isAuth 
                ? 
                <div>
                    { login } <button onClick={ logoutUserThunkCreator }>Выйти</button>
                </div>
                : 
                <NavLink to="/login">Login</NavLink> 
                }
            </div>
		</header>
    )
};

export default Header;