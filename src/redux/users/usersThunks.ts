import { Dispatch } from "redux";
import { usersAPI } from "../../api/api.js";
import { setIsFetching, setCurrentPage, setUsers, setTotalUsersCount, unfollow, follow, toogleIsFollowingProgress, ActionTypes, FollowType, UnfollowType } from "./usersReducer.ts";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../redux-store.ts";

type DispatchType = Dispatch<ActionTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkType => async(dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    
    let response = await usersAPI.getUsers(currentPage, pageSize);
    
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
    dispatch(setIsFetching(false));
};

const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: (userId: number) => FollowType | UnfollowType) => {
    let response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
        dispatch(toogleIsFollowingProgress(false));
    }
}

export const followingThunkCreator = (userId: number): ThunkType => async(dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(this), follow);
};

export const unfollowingThunkCreator = (userId: number): ThunkType => async(dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(this), unfollow);
};