import React from "react";
import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import { UserOutlined } from '@ant-design/icons';

const Navbar: React.FC = () => {
    return (
        <nav className={classes['left-navigation']}>
			<Menu
				mode="inline"
				style={{ height: '100vh', borderRight: 0, background: '#222222' }}
			>
				<Menu.Item icon={React.createElement(UserOutlined)}><NavLink to="/profile">Профиль</NavLink></Menu.Item>
				<Menu.Item><NavLink to="/dialogs">Сообщения</NavLink></Menu.Item>
				<Menu.Item><NavLink to="/music">Музыка</NavLink></Menu.Item>
				<Menu.Item><NavLink to="/settings">Настройки</NavLink></Menu.Item>
				<Menu.Item><NavLink to="/profile">Профиль</NavLink></Menu.Item>
				<Menu.Item><NavLink to="/users">Пользователи</NavLink></Menu.Item>
			</Menu>
		</nav>
    )
};

export default Navbar;