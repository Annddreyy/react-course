import React from "react";
import photoImg from '../../../assets/people.jpeg';
import { NavLink } from 'react-router-dom';
import classes from './User.module.css';

const User = ({ 
    id, name, status, photo, 
    followed, followingInProgress, 
    followingThunkCreator, unfollowingThunkCreator
}) => {
    return (
        <div className={classes.user}>
            <div className={classes['left-part']}>
                <div>
                    <NavLink to={"/profile/" + id}>
                        <img src={ photo ? photo : photoImg } alt="" />
                    </NavLink>
                </div>
                { followed 
                    ? <button 
                        disabled={ followingInProgress }
                        onClick={() => { unfollowingThunkCreator(id);}}>
                            Отписаться
                        </button> 
                    : <button 
                        disabled={ followingInProgress } 
                        onClick={() => { followingThunkCreator(id)} }>
                            Подписаться
                        </button> 
                }
            </div>
            <div>
                <div>
                    <p>Имя: { name }</p>
                    <p>Статус: { status ? status : '-' }</p>
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