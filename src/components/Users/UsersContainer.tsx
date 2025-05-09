import { connect } from "react-redux";
import { followingThunkCreator, getUsersThunkCreator, unfollowingThunkCreator } from "../../redux/users/usersThunks.ts";
import React from 'react';
import Users from './Users.tsx';
import Preloader from '../common/Preloader/Preloader.tsx';
import { withAuthRedirect } from "../../hoc/withAuthRedirect.tsx";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsAuth, getIsFetching, getPageSize, getTotalUsersCount, getUsers, getUserFilter } from "../../redux/users/userSelectors.ts";
import { UserType } from "../../types/types.tsx";
import { AppStateType } from "../../redux/redux-store.ts";
import { FilterType } from "../../redux/users/usersReducer.ts";

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
	currentPage: number,
	pageSize: number,
	isFetching: boolean,
	users: UserType[],
	totalItemsCount: number,
	followingInProgress: boolean,
	isAuth: boolean,
	filter: FilterType
}

type MapDispatchToPropsType = {
	getUsersThunkCreator: (currentPage: number, pageSize: number, filter: FilterType) => void,
	followingThunkCreator: (userId: number) => void,
	unfollowingThunkCreator: (userId: number) => void,
}

class UsersContainer extends React.Component<PropsType> {
	componentDidMount() {
		this.getUsers(this.props.currentPage, this.props.pageSize, this.props.filter);
	}

	setCurrentPage = (page: number) => {
		this.getUsers(page, this.props.pageSize, this.props.filter);
	};

	onFilterChanged = (filter: FilterType) => {
		this.getUsers(1, this.props.pageSize, filter);
	}
	
	getUsers = (currentPage: number, pageSize: number, filter = {} as FilterType) => {
		this.props.getUsersThunkCreator(currentPage, pageSize, filter);
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
					onFilterChanged={ this.onFilterChanged }
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
		filter: getUserFilter(state)
	};
};

export default compose(
	connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, { getUsersThunkCreator, followingThunkCreator, unfollowingThunkCreator }),
	withAuthRedirect
)(UsersContainer);
