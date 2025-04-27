import { connect } from "react-redux";
import { followingThunkCreator, getUsersThunkCreator, unfollowingThunkCreator } from "../../redux/users/usersThunks";
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsAuth, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users/userSelectors";

class UsersContainer extends React.Component {
	getUsers = (currentPage, pageSize) => {
		this.props.getUsersThunkCreator(currentPage, pageSize);
	};

	componentDidMount() {
		this.getUsers(this.props.currentPage, this.props.pageSize);
	}

	setCurrentPage = (page) => {
		this.getUsers(page, this.props.pageSize);
	};

	render() {
		return (
			<>
                { this.props.isFetching ? <Preloader /> : null }
				<Users {...this.props} setCurrentPage={ this.setCurrentPage } />
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalItemsCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
		isAuth: getIsAuth(state)
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
