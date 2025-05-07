import { authAPI, ResultCodeForCaptcha, ResultCodesEnum, securityAPI } from "../../api/api.js";
import { stopSubmit } from "redux-form";
import { setCaptchaUrl, setUserDataActionCreator } from "./authReducer.ts";

export const authUserThunkCreator = () => async(dispatch) => {
    let response = await authAPI.authUser();
    if (response.resultCode === ResultCodesEnum.Success) {
        let { id, email, login } = response.data;
        dispatch(setUserDataActionCreator(id, email, login, true));
    }
};

export const loginUserThunkCreator = (email, password, remember, captcha) => async(dispatch) => {
    let response = await authAPI.loginUser(email, password, remember || false);
    switch (response.resultCode) {
        case ResultCodesEnum.Success:
            dispatch(authUserThunkCreator());
            break;
        case ResultCodeForCaptcha.CaptchaIsRequired:
            dispatch(getCaptchaUrl());
            break;
        default:
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

export const getCaptchaUrl = () => async(dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    let captchaUrl = response.url;
    dispatch(setCaptchaUrl(captchaUrl));
}