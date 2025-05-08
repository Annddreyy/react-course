import React from 'react';
import classes from './Users.module.css';
import User from './User/User.tsx';
import Paginator from '../common/Paginator/Paginator.tsx';
import { UserType } from '../../types/types.ts';

type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    portionSize?: number,
    setCurrentPage: (page: number) => void,
    users: UserType[],
    followingInProgress: boolean,
    followingThunkCreator: (userId: number) => void,
    unfollowingThunkCreator: (userId: number) => void
}

const Users: React.FC<PropsType> = ({ users, followingInProgress, followingThunkCreator, unfollowingThunkCreator, portionSize = 10, ...page }) => {
    let usersElements = users.map( user => 
        <User 
            user={ user } 
            followingInProgress={ followingInProgress }
            followingThunkCreator={ followingThunkCreator }
            unfollowingThunkCreator={ unfollowingThunkCreator }
            key={ user.id }
        /> 
    );

    return (
        <section className={ classes.users }>
            <h2>Пользователи</h2>
            { usersElements }
            <Paginator 
                pageSize={ page.pageSize }
                totalItemsCount={ page.totalItemsCount } 
                currentPage={ page.currentPage } 
                setCurrentPage={ page.setCurrentPage } 
                portionSize={ 10 }
            />
        </section>
    )
};

export default Users;