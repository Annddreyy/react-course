import React from 'react';
import classes from './Users.module.css';
import User from './User/User.tsx';
import Paginator from '../common/Paginator/Paginator.tsx';
import { UserType } from '../../types/types.ts';
import UserSearchForm from './UserSearchForm/UserSearchForm.tsx';
import { FilterType } from '../../redux/users/usersReducer.ts';

type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    portionSize?: number,
    users: UserType[],
    followingInProgress: boolean,
    setCurrentPage: (page: number) => void,
    followingThunkCreator: (userId: number) => void,
    unfollowingThunkCreator: (userId: number) => void,
    onFilterChanged: (filter: FilterType) => void
}

const Users: React.FC<PropsType> = ({ users, onFilterChanged, followingInProgress, followingThunkCreator, unfollowingThunkCreator, portionSize = 10, ...page }) => {
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
            <UserSearchForm onFilterChanged={ onFilterChanged } />
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