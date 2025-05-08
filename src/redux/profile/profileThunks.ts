import { ThunkAction } from "redux-thunk";
import { ResultCodesEnum } from "../../api/api.ts";
import { profileAPI } from './../../api/profileAPI.ts';
import { ActionTypes, actions } from "./profileReducer.ts";
import { AppStateType } from "../redux-store.ts";

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export const setProfileThunkCreator = (userId: number): ThunkType => async(dispatch) =>  {
    let response = await profileAPI.getProfileInformation(userId)
    dispatch(actions.setProfileInformationActionCreator(response));
};

export const getStatusThunkCreator = (userId: number): ThunkType => async(dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(actions.setStatusActionCreator(response));
};

export const updateStatusThunkCreator = (status: string): ThunkType => async(dispatch) => {
    try {
        let response = await profileAPI.setStatus(status);
        if (response.resultCode === ResultCodesEnum.Success) {
            dispatch(actions.setStatusActionCreator(status));
        }
    } catch(err) {}
};