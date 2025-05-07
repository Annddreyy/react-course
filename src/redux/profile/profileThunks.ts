import { ThunkAction } from "redux-thunk";
import { profileAPI } from "../../api/api.ts";
import { ActionTypes, setProfileInformationActionCreator, setStatusActionCreator } from "./profileReducer.ts";
import { AppStateType } from "../redux-store.ts";

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export const setProfileThunkCreator = (userId: number): ThunkType => async(dispatch) =>  {
    let response = await profileAPI.getProfileInformation(userId)
    dispatch(setProfileInformationActionCreator(response));
};

export const getStatusThunkCreator = (userId: number): ThunkType => async(dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatusActionCreator(response));
};

export const updateStatusThunkCreator = (status: string): ThunkType => async(dispatch) => {
    try {
        let response = await profileAPI.setStatus(status);
        if (response.resultCode === 0) {
            dispatch(setStatusActionCreator(status));
        }
    } catch(err) {
        console.log( err );
    }
};