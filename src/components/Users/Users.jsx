import React from "react";
import User from "./User/User";
import axios from 'axios'

class Users extends React.Component {
    
    componentDidMount() {
        this.getUsers();
    }
    
    getUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            this.props.setUsers(response.data.items);
        });
    }
    
    render() {
        let users = this.props.users.map( user => 
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

        return (
            <div>
                <button onClick={ this.getUsers }>Get Users</button>
                { users }
            </div>
        )
    }
}

export default Users;