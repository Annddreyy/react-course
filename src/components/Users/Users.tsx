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
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, DatePicker } from 'antd';

type QueryParamsType = { term?: string, page?: string, friend?: string };

export const Users: React.FC = () => {
    const totalItemsCount = useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const filter = useSelector(getUserFilter);
    const users = useSelector(getUsersSelector);

    const followingInProgress = useSelector(getFollowingInProgress);
    
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const location = useLocation();

    const setCurrentPage = (currentPage: number) => {
        dispatch(getUsersThunkCreator(currentPage, pageSize, filter));
    };

    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsersThunkCreator(1, pageSize, filter));
    };

    useEffect(() => {
        const query: QueryParamsType = {};

        if (!!filter.term) query.term = filter.term;
        if (filter.friend !== null) query.friend = String(filter.friend);
        if (currentPage !== 1) query.page = String(currentPage);

        const queryString = new URLSearchParams(
            Object.entries(query).reduce((acc, [key, value]) => {
                if (value !== undefined && value !== null) {
                    acc[key] = String(value);
                }
                return acc;
            }, {} as Record<string, string>)
        ).toString();

        navigate({
            pathname: '/users',
            search: queryString
        })
    }, [filter, currentPage]);

    useEffect(() => {
        const search = location.search;
        const parsed = new URLSearchParams(search);

        let actualPage = currentPage;
        let actualFriend = filter.friend;
        let actualTerm = filter.term;

        if (parsed.get('page')) {
            actualPage = +parsed.get('page')!;
        }

        if (parsed.get('term')){
            actualTerm = parsed.get('term')!;
        }

        if (parsed.get('friend')){
            actualFriend = parsed.get('friend') === "null" ? null : parsed.get('friend') === "true" ? "true" : "false";
        };

        let actualFilter = {
            term: actualTerm,
            friend: actualFriend
        }

        dispatch(getUsersThunkCreator(actualPage, pageSize, actualFilter));
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
