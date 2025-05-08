import { instance, ResultCodesEnum, ResultCodeForCaptcha, DefaultResponseType } from "./api"

type MeResponseDataType = {
    id: number,
    email: string,
    login: string
}

type LoginUserDataType = {
    id: number
}

type LoginUserResultCodeType = ResultCodesEnum | ResultCodeForCaptcha;

export const authAPI = {
    authUser() {
        return instance.get<DefaultResponseType<MeResponseDataType>>('auth/me')
        .then(response => response.data);
    },

    loginUser(email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return instance
        .post<DefaultResponseType<LoginUserDataType, LoginUserResultCodeType>>('auth/login', { email, password, rememberMe, captcha })
        .then(response => response.data);
    },

    logoutUser() {
        return instance
        .delete<DefaultResponseType>('auth/login')
        .then(response => response.data);
    }
};