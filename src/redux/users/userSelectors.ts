import { createSelector } from 'reselect';
import { AppStateType } from '../redux-store';

export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users;
};

export const getTempUsers = (state: AppStateType) => {
    return getUsersSelector(state).filter(user => true);
}

export const getTempUsersReselect = createSelector(getUsersSelector, (users) => {
    users.filter(u => true);
});

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage;
};

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress;
};

export const getIsAuth = (state: AppStateType) => {
    return state.auth.isAuth;
};

export const getUserFilter = (state: AppStateType) => {
    return state.usersPage.filter;
}
