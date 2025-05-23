import { ResultCodeForCaptcha, ResultCodesEnum } from "../../api/api";
import { authAPI } from './../../api/authAPI';
import { securityAPI } from './../../api/securityAPI';
import { stopSubmit } from "redux-form";
import { ActionTypes } from "./authReducer";
import { BaseThunkType } from './../redux-store';
import { actions } from "./authReducer";

export const authUserThunkCreator = (): BaseThunkType<ActionTypes> => async(dispatch) => {
    let response = await authAPI.authUser();
    debugger;
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
