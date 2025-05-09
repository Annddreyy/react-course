import { ResultCodesEnum } from "../../api/api";
import { profileAPI } from './../../api/profileAPI';
import { ActionTypes, actions } from "./profileReducer";
import { BaseThunkType } from "../redux-store";

export const setProfileThunkCreator = (userId: number): BaseThunkType<ActionTypes> => async(dispatch) =>  {
    let response = await profileAPI.getProfileInformation(userId)
    dispatch(actions.setProfileInformationActionCreator(response));
};

export const getStatusThunkCreator = (userId: number): BaseThunkType<ActionTypes> => async(dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(actions.setStatusActionCreator(response));
};

export const updateStatusThunkCreator = (status: string): BaseThunkType<ActionTypes> => async(dispatch) => {
    try {
        let response = await profileAPI.setStatus(status);
        if (response.resultCode === ResultCodesEnum.Success) {
            dispatch(actions.setStatusActionCreator(status));
        }
    } catch(err) {}
};