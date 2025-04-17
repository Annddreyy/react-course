import { connect } from "react-redux";
import {
	follow,
	setCurrentPage,
	setIsFetching,
	setTotalUsersCount,
	setUsers,
	toogleIsFollowingProgress,
	unfollow,
} from "../../redux/usersReducer";
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersAPIComponent extends React.Component {
	componentDidMount() {
		this.getUsers();
	}

	getUsers = () => {
        this.props.setIsFetching(true);
		usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
			.then((response) => {
				debugger;
                this.props.setUsers(response.items);
				this.props.setTotalUsersCount(100);
                this.props.setIsFetching(false);
			});
	};

	setCurrentPage = (page) => {
		this.props.setCurrentPage(page);
		this.getUsers();
	};

	render() {
		return (
			<>
                { this.props.isFetching ? <Preloader /> : null }
				<Users
					totalUsersCount={ this.props.totalUsersCount }
					currentPage={ this.props.currentPage }
					pageSize={ this.props.pageSize }
					users={ this.props.users }
					getUsers={ this.getUsers }
					setCurrentPage={ this.setCurrentPage }
					pages={ this.props.pages }
					follow={ this.props.follow }
					unfollow={ this.props.unfollow }
					isFetching={ this.props.isFetching }
					followingInProgress={ this.props.followingInProgress }
					toogleIsFollowingProgress={ this.props.toogleIsFollowingProgress }
				/>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	debugger;
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	};
};

const mapDispatchToProps =  {
    follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
    setIsFetching,
	toogleIsFollowingProgress
}

const UsersContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(UsersAPIComponent);

export default UsersContainer;
