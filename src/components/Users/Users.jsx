import React from 'react';
import classes from './Users.module.css';
import User from './User/User';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };
        
    let users = props.users.map( user => <User {...props} {...user} photo={ user.photos.small } /> );

    return (
        <section className={classes.users}>
            <h2>Пользователи</h2>
            { users }
            <div className={classes.pagination}>
                { pages.map( page => <span 
                        className={ props.currentPage === page ? classes.selected : "" } 
                        onClick={() => props.setCurrentPage(page)}>{page}
                    </span>
                ) }
            </div>
        </section>
    )
};

export default Users;