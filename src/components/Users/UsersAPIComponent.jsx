import React from "react";
import axios from 'axios';
import Users from "./Users";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.getUsers();
    }
    
    getUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(100);
        });
    }

    setCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        this.getUsers();
    }
    
    render() {
        console.log( this.props );
        debugger;
        return (<Users 
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            getUsers={this.getUsers}
            setCurrentPage={this.setCurrentPage}
            pages={this.props.pages}
        />)
    }
}

export default UsersAPIComponent;