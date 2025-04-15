import React from "react";
import photo from '../../../assets/people.jpeg';
import { NavLink } from 'react-router-dom';
import classes from './User.module.css';
import axios from 'axios';

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
                        axios
                        .delete(
                            `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                            { 
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '71ee9618-84e0-4c45-b11e-f17709b94742'
                                }
                            }
                        )
                        .then((response) => {
                            if (response.data.resultCode === 0) {
                                unfollow();
                            }
                        });
                    }}>Отписаться</button> 
                    : <button onClick={() => {
                        axios
                        .post(
                            `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                            {},
                            { 
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '71ee9618-84e0-4c45-b11e-f17709b94742'
                                }
                            }
                        )
                        .then((response) => {
                            if (response.data.resultCode === 0) {
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