import React from "react";
import photo from '../../../assets/people.jpeg';
import { NavLink } from 'react-router-dom';
import classes from './User.module.css';

const User = (props) => {
    return (
        <div className={classes.user}>
            <div className={classes['left-part']}>
                <div>
                    <NavLink to={"/profile/" + props.id}>
                        <img src={ props.photo ? props.photo : photo } alt="" />
                    </NavLink>
                </div>
                { props.followed 
                    ? <button 
                        disabled={ props.followingInProgress }
                        onClick={() => { props.unfollowingThunkCreator(props.id);}}>
                            Отписаться
                        </button> 
                    : <button 
                        disabled={ props.followingInProgress } 
                        onClick={() => { props.followingThunkCreator(props.id)} }>
                            Подписаться
                        </button> 
                }
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