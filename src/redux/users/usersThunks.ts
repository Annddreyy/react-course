import { Dispatch } from "redux";
import { ResultCodesEnum, usersAPI } from "../../api/api.js";
import { actions, ActionTypes } from "./usersReducer.ts";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../redux-store.ts";

type DispatchType = Dispatch<ActionTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkType => async(dispatch) => {
    dispatch(actions.setIsFetching(true));
    dispatch(actions.setCurrentPage(currentPage));
    
    let response = await usersAPI.getUsers(currentPage, pageSize);
    
    dispatch(actions.setUsers(response.items));
    dispatch(actions.setTotalUsersCount(response.totalCount));
    dispatch(actions.setIsFetching(false));
};

const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: (userId: number) => ActionTypes) => {
    let response = await apiMethod(userId);
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(actionCreator(userId));
        dispatch(actions.toogleIsFollowingProgress(false));
    }
}

export const followingThunkCreator = (userId: number): ThunkType => async(dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(this), actions.follow);
};

export const unfollowingThunkCreator = (userId: number): ThunkType => async(dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(this), actions.unfollow);
};