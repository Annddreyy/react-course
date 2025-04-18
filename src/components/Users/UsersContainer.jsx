import { connect } from "react-redux";
import {
	follow,
	followingThunkCreator,
	getUsersThunkCreator,
	setCurrentPage,
	setTotalUsersCount,
	setUsers,
	toogleIsFollowingProgress,
	unfollow,
	unfollowingThunkCreator,
} from "../../redux/usersReducer";
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersAPIComponent extends React.Component {
	componentDidMount() {
		this.getUsers();
	}

	getUsers = () => {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
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
					followingThunkCreator={ this.props.followingThunkCreator }
					unfollowingThunkCreator={ this.props.unfollowingThunkCreator }
					isAuth={ this.props.isAuth }
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
		followingInProgress: state.usersPage.followingInProgress,
		isAuth: state.auth.isAuth
	};
};

const mapDispatchToProps =  {
    follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toogleIsFollowingProgress,
	getUsersThunkCreator,
	followingThunkCreator,
	unfollowingThunkCreator
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(UsersAPIComponent);
