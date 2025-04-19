import { connect } from "react-redux";
import { followingThunkCreator, getUsersThunkCreator, unfollowingThunkCreator } from "../../redux/usersReducer";
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
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
				<Users {...this.props} />
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
	getUsersThunkCreator,
	followingThunkCreator,
	unfollowingThunkCreator
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(UsersContainer);
