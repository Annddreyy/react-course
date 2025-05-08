import { ResultCodeForCaptcha, ResultCodesEnum } from "../../api/api.ts";
import { authAPI } from './../../api/authAPI.ts';
import { securityAPI } from './../../api/securityAPI.ts';
import { stopSubmit } from "redux-form";
import { ActionTypes } from "./authReducer.ts";
import { BaseThunkType } from './../redux-store';
import { actions } from "./authReducer.ts";

export const authUserThunkCreator = (): BaseThunkType<ActionTypes> => async(dispatch) => {
    let response = await authAPI.authUser();
    if (response.resultCode === ResultCodesEnum.Success) {
        let { id, email, login } = response.data;
        dispatch(actions.setUserDataActionCreator(id, email, login, true));
    }
};

export const loginUserThunkCreator = (email: string, password: string, remember = false, captcha = ''): BaseThunkType<ActionTypes | ReturnType<typeof stopSubmit>> => 
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

export const logoutUserThunkCreator = (): BaseThunkType<ActionTypes> => async(dispatch) => {
    let response = await authAPI.logoutUser()
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setUserDataActionCreator(null, null, null, false));
    }
};

export const getCaptchaUrl = (): BaseThunkType<ActionTypes> => async(dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    let captchaUrl = response.url;
    dispatch(actions.setCaptchaUrl(captchaUrl));
}
