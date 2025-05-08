import { Dispatch } from "redux";
import { ResultCodesEnum } from "../../api/api.ts";
import { usersAPI } from './../../api/usersAPI.ts';
import { actions, ActionTypes } from "./usersReducer.ts";
import { BaseThunkType } from "../redux-store.ts";

type DispatchType = Dispatch<ActionTypes>;

export const getUsersThunkCreator = (currentPage: number, pageSize: number): BaseThunkType<ActionTypes> => async(dispatch) => {
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

export const followingThunkCreator = (userId: number): BaseThunkType<ActionTypes> => async(dispatch) => {
    await _followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(this), actions.follow);
};

export const unfollowingThunkCreator = (userId: number): BaseThunkType<ActionTypes> => async(dispatch) => {
    await _followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(this), actions.unfollow);
};