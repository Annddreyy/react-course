import React from 'react';
import classes from './Users.module.css';
import User from './User/User';
import Paginator from '../common/Paginator/Paginator';


const Users = ({ 
    totalItemsCount, pageSize, currentPage, setCurrentPage, portionSize = 10,
    users, followingThunkCreator, unfollowingThunkCreator 
}) => {
    
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
            <Paginator 
                pageSize={ pageSize }
                totalItemsCount={ totalItemsCount } 
                currentPage={ currentPage } 
                setCurrentPage={ setCurrentPage } 
            />
        </section>
    )
};

export default Users;