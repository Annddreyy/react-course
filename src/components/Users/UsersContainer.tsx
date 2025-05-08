import { connect } from "react-redux";
import { followingThunkCreator, getUsersThunkCreator, unfollowingThunkCreator } from "../../redux/users/usersThunks.js";
import React from 'react';
import Users from './Users.tsx';
import Preloader from '../common/Preloader/Preloader.jsx';
import { withAuthRedirect } from "../../hoc/withAuthRedirect.js";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsAuth, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users/userSelectors.js";
import { UserType } from "../../types/types.ts";
import { AppStateType } from "../../redux/redux-store.ts";

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
	currentPage: number,
	pageSize: number,
	isFetching: boolean,
	users: UserType[],
	totalItemsCount: number,
	followingInProgress: boolean,
	isAuth: boolean
}

type MapDispatchToPropsType = {
	getUsersThunkCreator: (currentPage: number, pageSize: number) => void,
	followingThunkCreator: (userId: number) => void,
	unfollowingThunkCreator: (userId: number) => void,
}

class UsersContainer extends React.Component<PropsType> {
	componentDidMount() {
		this.getUsers(this.props.currentPage, this.props.pageSize);
	}

	setCurrentPage = (page: number) => {
		this.getUsers(page, this.props.pageSize);
	};
	
	getUsers = (currentPage: number, pageSize: number) => {
		this.props.getUsersThunkCreator(currentPage, pageSize);
	};

	render() {
		return (
			<>
                { this.props.isFetching ? <Preloader /> : null }
				<Users 
					users={ this.props.users }
					pageSize={ this.props.pageSize }
					currentPage={ this.props.currentPage }
					totalItemsCount={ this.props.totalItemsCount }
					followingInProgress={ this.props.followingInProgress }
					setCurrentPage={ this.setCurrentPage }
					followingThunkCreator={ this.props.followingThunkCreator } 
					unfollowingThunkCreator={ this.props.unfollowingThunkCreator }
				/>
			</>
		);
	}
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalItemsCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
		isAuth: getIsAuth(state),
	};
};

export default compose(
	connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, { getUsersThunkCreator, followingThunkCreator, unfollowingThunkCreator }),
	withAuthRedirect
)(UsersContainer);
