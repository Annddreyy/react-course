import React from "react";
import classes from './Header.module.css'

console.log( classes );

const Header = () => {
    return (
        <header className={classes.header}>
			<img src="https://jnsenfeng.ru/images/vk.png" alt=""></img>
		</header>
    )
};

export default Header;