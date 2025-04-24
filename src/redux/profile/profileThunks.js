import { profileAPI } from "../../api/api";
import { setProfileInformationActionCreator, setStatusActionCreator } from "./profileReducer";

export const setProfileThunkCreator = (userId) => async(dispatch) =>  {
    let response = await profileAPI.getProfileInformation(userId)
    dispatch(setProfileInformationActionCreator(response));
};

export const getStatusThunkCreator = (userId) => async(dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatusActionCreator(response));
};

export const updateStatusThunkCreator = (status) => async(dispatch) => {
    let response = await profileAPI.setStatus(status);
    if (response.resultCode === 0) {
        dispatch(setStatusActionCreator(status));
    }
};