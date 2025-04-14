import { connect } from "react-redux";
import {
	followActionCreator,
	setCurrentPageActionCreator,
	setIsFetchingActionCreator,
	setTotalUsersCountActionCreator,
	setUsersActionCreator,
	unfollowActionCreator,
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersAPIComponent extends React.Component {
	componentDidMount() {
		this.getUsers();
	}

	getUsers = () => {
        this.props.toogleFetching(true);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
			)
			.then((response) => {
                this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(100);
                this.props.toogleFetching(false);
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
					totalUsersCount={this.props.totalUsersCount}
					currentPage={this.props.currentPage}
					pageSize={this.props.pageSize}
					users={this.props.users}
					getUsers={this.getUsers}
					setCurrentPage={this.setCurrentPage}
					pages={this.props.pages}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
					isFetching={this.props.isFetching}
				/>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followActionCreator(userId));
		},
		unfollow: (userId) => {
			dispatch(unfollowActionCreator(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersActionCreator(users));
		},
		setCurrentPage: (page) => {
			dispatch(setCurrentPageActionCreator(page));
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setTotalUsersCountActionCreator(totalCount));
		},
        toogleFetching: (isFetching) => {
            dispatch(setIsFetchingActionCreator(isFetching))
        }
	};
};

const UsersContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(UsersAPIComponent);

export default UsersContainer;
