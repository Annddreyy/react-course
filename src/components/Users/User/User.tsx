import React from "react";
import photoImg from '../../../assets/people.jpeg';
import { NavLink } from 'react-router-dom';
import classes from './User.module.css';

type PropsType = {
    id: number,
    name: string,
    status: string,
    photo: string,
    followed: boolean,
    followingInProgress: boolean,
    followingThunkCreator: (userId: number) => void,
    unfollowingThunkCreator: (userId: number) => void
}

const User = ({ followingInProgress, followingThunkCreator, unfollowingThunkCreator, ...user }: PropsType) => {
    return (
        <div className={classes.user}>
            <div className={classes['left-part']}>
                <div>
                    <NavLink to={"/profile/" + user.id}>
                        <img src={ user.photo ? user.photo : photoImg } alt="" />
                    </NavLink>
                </div>
                { user.followed 
                    ? <button 
                        disabled={ followingInProgress }
                        onClick={() => { unfollowingThunkCreator(user.id);}}>
                            Отписаться
                        </button> 
                    : <button 
                        disabled={ followingInProgress } 
                        onClick={() => { followingThunkCreator(user.id)} }>
                            Подписаться
                        </button> 
                }
            </div>
            <div>
                <div>
                    <p>Имя: { user.name }</p>
                    <p>Статус: { user.status ? user.status : '-' }</p>
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