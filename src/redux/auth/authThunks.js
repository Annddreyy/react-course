import { authAPI } from "../../api/api";
import { stopSubmit } from "redux-form";
import { setUserDataActionCreator } from "./authReducer";

export const authUserThunkCreator = () => async(dispatch) => {
    let response = await authAPI.authUser();
    if (response.resultCode === 0) {
        let { id, email, login } = response.data;
        dispatch(setUserDataActionCreator(id, email, login, true));
    }
};

export const loginUserThunkCreator = (email, password, remember) => async(dispatch) => {
    let response = await authAPI.loginUser(email, password, remember || false);
    if (response.resultCode === 0) {
        dispatch(authUserThunkCreator());
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : 'Ошибка!';
        dispatch(stopSubmit('login', { _error: message } ));
    }
};

export const logoutUserThunkCreator = () => async(dispatch) => {
    let response = await authAPI.logoutUser()
    if (response.resultCode === 0) {
        dispatch(setUserDataActionCreator(null, null, null, false));
    }
};
