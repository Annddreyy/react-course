import { authAPI, ResultCodeForCaptcha, ResultCodesEnum, securityAPI } from "../../api/api.js";
import { stopSubmit } from "redux-form";
import { ActionTypes, setCaptchaUrl, setUserDataActionCreator } from "./authReducer.ts";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from './../redux-store';

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export const authUserThunkCreator = (): ThunkType => async(dispatch) => {
    let response = await authAPI.authUser();
    if (response.resultCode === ResultCodesEnum.Success) {
        let { id, email, login } = response.data;
        dispatch(setUserDataActionCreator(id, email, login, true));
    }
};

export const loginUserThunkCreator = (email: string, password: string, remember = false, captcha = ''): ThunkType => 
    async(dispatch) => {
    let response = await authAPI.loginUser(email, password, remember, captcha);
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

export const logoutUserThunkCreator = (): ThunkType => async(dispatch) => {
    let response = await authAPI.logoutUser()
    if (response.resultCode === 0) {
        dispatch(setUserDataActionCreator(null, null, null, false));
    }
};

export const getCaptchaUrl = (): ThunkType => async(dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    let captchaUrl = response.url;
    dispatch(setCaptchaUrl(captchaUrl));
}
