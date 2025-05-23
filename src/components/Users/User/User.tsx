import React from "react";
import photoImg from '../../../assets/people.jpeg';
import { NavLink } from 'react-router-dom';
import classes from './User.module.css';
import { UserType } from "../../../types/types";

type PropsType = {
    user: UserType,
    followingInProgress: boolean,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
}

const User: React.FC<PropsType> = ({ user, followingInProgress, follow, unfollow }) => {
    return (
        <div className={classes.user}>
            <div className={classes['left-part']}>
                <div>
                    <NavLink to={"/profile/" + user.id}>
                        <img src={ user.photos.small ? user.photos.small : photoImg } alt="" />
                    </NavLink>
                </div>
                { user.followed 
                    ? <button 
                        disabled={ followingInProgress }
                        onClick={() => { unfollow(user.id);}}>
                            Отписаться
                        </button> 
                    : <button 
                        disabled={ followingInProgress } 
                        onClick={() => { follow(user.id)} }>
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