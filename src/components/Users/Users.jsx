import React from 'react';
import classes from './Users.module.css';
import User from './User/User'


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };
        
    let users = props.users.map( user => 
        <User 
            name={user.name} 
            photo={user.photos.small}
            status={user.status}
            followed={user.followed}
            id={user.id}
            follow={this.props.follow}
            unfollow={this.props.unfollow} 
        />
    )

    console.log( props.users );

    return (
        <div>
            <button onClick={ props.getUsers }>Get Users</button>
            { users }
            <div>
                { props.pages.map( page => <span 
                        className={ props.currentPage === page ? classes.selected : "" } 
                        onClick={() => props.setCurrentPage(page)}>{page}
                    </span>
                ) }
            </div>
        </div>
    )
};

export default Users;