import React from "react";
import User from "./User/User";
import axios from 'axios'

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items);
            });
        }
    }

    let users = props.users.map( user => 
                                <User 
                                name={user.name} 
                                photo={user.photos.small}
                                status={user.status}
                                followed={user.followed}
                                id={user.id}
                                follow={props.follow}
                                unfollow={props.unfollow} />);
    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            { users }
        </div>
    )
}

export default Users;