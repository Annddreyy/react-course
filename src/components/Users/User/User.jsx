import React from "react";
import photo from '../../../assets/people.jpeg';
import { NavLink } from 'react-router-dom';
import classes from './User.module.css';
import { usersAPI } from "../../../api/api";

const User = (props) => {
    let follow = () => {
        props.follow(props.id);
    };

    let unfollow = () => {
        props.unfollow(props.id);
    }

    return (
        <div className={classes.user}>
            <div className={classes['left-part']}>
                <div>
                    <NavLink to={"/profile/" + props.id}>
                        <img src={ props.photo ? props.photo : photo } alt="" />
                    </NavLink>
                </div>
                { props.followed 
                    ? <button onClick={() => {
                        usersAPI.unfollowUser(props.id)
                        .then(response => {
                            if (response.resultCode === 0) {
                                unfollow();
                            }
                        });
                    }}>Отписаться</button> 
                    : <button onClick={() => {
                        usersAPI.followUser(props.id)
                        .then(response => {
                            if (response.resultCode === 0) {
                                follow();
                            }
                        });
                    }}>Подписаться</button> }
            </div>
            <div>
                <div>
                    <p>Имя: { props.name }</p>
                    <p>Статус: { props.status ? props.status : '-' }</p>
                </div>
                <div>
                    <p>Город: Пенза</p>
                    <p>Страна: Россия</p>
                </div>
            </div>
        </div>
    )
}

export default User;