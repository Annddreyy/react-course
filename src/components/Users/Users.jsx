import React from 'react';
import classes from './Users.module.css';
import User from './User/User';

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
    /> );

    return (
        <section className={classes.users}>
            <h2>Пользователи</h2>
            { usersElements }
            <div className={classes.pagination}>
                { pages.map( page => 
                    <span 
                        className={ currentPage === page ? classes.selected : "" } 
                        onClick={() => setCurrentPage(page)}>{page}
                    </span>
                ) }
            </div>
        </section>
    )
};

export default Users;