import { usersAPI } from "../../api/api";
import { setIsFetching, setCurrentPage, setUsers, setTotalUsersCount, unfollow, follow, toogleIsFollowingProgress } from "./usersReducer.ts";

export const getUsersThunkCreator = (currentPage, pageSize) => async(dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    
    let response = await usersAPI.getUsers(currentPage, pageSize);
    
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
    dispatch(setIsFetching(false));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    let response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
        dispatch(toogleIsFollowingProgress(false));
    }
}

export const followingThunkCreator = (userId) => async(dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(this), follow);
};

export const unfollowingThunkCreator = (userId) => async(dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(this), unfollow);
};