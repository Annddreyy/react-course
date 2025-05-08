import { instance, ResultCodesEnum, ResultCodeForCaptcha, DefaultResponseType } from "./api"

type MeResponseType = {
    data: {
        id: number,
        email: string,
        login: string
    },
    resultCode: ResultCodesEnum,
    messages: string[]
}

type LoginUserType = {
    data: {
        id: number
    },
    resultCode: ResultCodesEnum | ResultCodeForCaptcha,
    messages: string[]
}

export const authAPI = {
    authUser() {
        return instance.get<MeResponseType>('auth/me')
        .then(response => response.data);
    },

    loginUser(email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return instance
        .post<LoginUserType>('auth/login', { email, password, rememberMe, captcha })
        .then(response => response.data);
    },

    logoutUser() {
        return instance
        .delete<DefaultResponseType>('auth/login')
        .then(response => response.data);
    }
};