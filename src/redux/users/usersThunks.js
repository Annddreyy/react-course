import { usersAPI } from "../../api/api";
import { setIsFetching, setCurrentPage, setUsers, setTotalUsersCount, unfollow, follow, toogleIsFollowingProgress } from "./usersReducer";

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    usersAPI.getUsers(currentPage, pageSize)
    .then((response) => {
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(100));
        dispatch(setIsFetching(false));
    });
};

export const followingThunkCreator = (userId) => (dispatch) => {
    usersAPI.followUser(userId)
    .then(response => {
    if (response.resultCode === 0) {
        dispatch(follow(userId));
        dispatch(toogleIsFollowingProgress(false));
    }});
}

export const unfollowingThunkCreator = (userId) => (dispatch) => {
    usersAPI.unfollowUser(userId)
    .then(response => {
        if (response.resultCode === 0) {
            dispatch(unfollow(userId));
            dispatch(toogleIsFollowingProgress(false));
        }
    });
}