import React from 'react';
import classes from './Users.module.css';
import User from './User/User';
import Paginator from '../common/Paginator/Paginator';


const Users = ({ 
    totalUsersCount, pageSize, currentPage, setCurrentPage,
    users, followingThunkCreator, unfollowingThunkCreator 
}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };
        
    let usersElements = users.map( user => <User 
        {...user} 
        photo={ user.photos.small } 
        followingThunkCreator={ followingThunkCreator }
        unfollowingThunkCreator={ unfollowingThunkCreator }
        key={ user.id }
    /> );

    return (
        <section className={classes.users}>
            <h2>Пользователи</h2>
            { usersElements }
            <Paginator pages={ pages } currentPage={ currentPage } setCurrentPage={ setCurrentPage } />
        </section>
    )
};

export default Users;