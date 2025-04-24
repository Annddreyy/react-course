import { profileAPI } from "../../api/api";
import { setProfileInformationActionCreator, setStatusActionCreator } from "./profileReducer";

export const setProfileThunkCreator = (userId) => (dispatch) =>  {
    profileAPI.getProfileInformation(userId)
    .then(response => dispatch(setProfileInformationActionCreator(response)));
};

export const getStatusThunkCreator = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
    .then(response => dispatch(setStatusActionCreator(response)));
};

export const updateStatusThunkCreator = (status) => (dispatch) => {
    profileAPI.setStatus(status)
    .then(response => {
        if (response.resultCode === 0) {
            dispatch(setStatusActionCreator(status));
        }
    });
};