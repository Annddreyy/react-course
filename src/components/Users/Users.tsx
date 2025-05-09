import React, { useEffect } from 'react';
import classes from './Users.module.css';
import User from './User/User';
import Paginator from '../common/Paginator/Paginator';
import UserSearchForm from './UserSearchForm/UserSearchForm';
import { FilterType } from '../../redux/users/usersReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUserFilter, getUsersSelector } from '../../redux/users/userSelectors';
import { followingThunkCreator, getUsersThunkCreator, unfollowingThunkCreator } from '../../redux/users/usersThunks';
import { AppDispatch } from '../../redux/redux-store';

export const Users: React.FC = () => {
    const totalItemsCount = useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const filter = useSelector(getUserFilter);
    const users = useSelector(getUsersSelector);

    const followingInProgress = useSelector(getFollowingInProgress);
    
    const dispatch = useDispatch<AppDispatch>();

    const setCurrentPage = (currentPage: number) => {
        dispatch(getUsersThunkCreator(currentPage, pageSize, filter));
    };

    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsersThunkCreator(1, pageSize, filter));
    };

    useEffect(() => {
        dispatch(getUsersThunkCreator(currentPage, pageSize, filter));
    }, []);

    const follow = (userId: number) => {
        dispatch(followingThunkCreator(userId));
    };

    const unfollow  = (userId: number) => {
        dispatch(unfollowingThunkCreator(userId));
    };
    
    let usersElements = users.map( user => 
        <User 
            user={ user } 
            followingInProgress={ followingInProgress }
            follow={ follow }
            unfollow={ unfollow }
            key={ user.id }
        /> 
    );

    return (
        <section className={ classes.users }>
            <h2>Пользователи</h2>
            <UserSearchForm onFilterChanged={ onFilterChanged } />
            { usersElements }
            <Paginator 
                pageSize={ pageSize }
                totalItemsCount={ totalItemsCount } 
                currentPage={ currentPage } 
                setCurrentPage={ setCurrentPage } 
                portionSize={ 10 }
            />
        </section>
    )
};
