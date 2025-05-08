import { ResultCodeForCaptcha, ResultCodesEnum } from "../../api/api.js";
import { authAPI } from './../../api/authAPI.ts';
import { securityAPI } from './../../api/securityAPI.ts';
import { stopSubmit } from "redux-form";
import { ActionTypes } from "./authReducer.ts";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from './../redux-store';
import { actions } from "./authReducer.ts";

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export const authUserThunkCreator = (): ThunkType => async(dispatch) => {
    let response = await authAPI.authUser();
    if (response.resultCode === ResultCodesEnum.Success) {
        let { id, email, login } = response.data;
        dispatch(actions.setUserDataActionCreator(id, email, login, true));
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
        dispatch(actions.setUserDataActionCreator(null, null, null, false));
    }
};

export const getCaptchaUrl = (): ThunkType => async(dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    let captchaUrl = response.url;
    dispatch(actions.setCaptchaUrl(captchaUrl));
}
