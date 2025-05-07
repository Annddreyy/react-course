import axios from 'axios';
import { ProfileInformationType, UserType } from '../types/types';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '71ee9618-84e0-4c45-b11e-f17709b94742'
    }
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
};

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
};

type DefaultResponseType = {
    resultCode: ResultCodesEnum,
    messages: string[],
    data: {}
};

type GetUsersType = {
    items: UserType[],
    totalCount: number,
    error: string | null
};

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance
        .get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
    },

    followUser(userId: number) {
        return instance
        .post<DefaultResponseType>(`follow/${userId}`, {})
        .then(response => response.data);
    },

    unfollowUser(userId: number) {
        return instance
        .delete<DefaultResponseType>(`follow/${userId}`)
        .then(response => response.data);
    }
};

export const profileAPI = {
    getProfileInformation(userId: number) {
        return instance
        .get<ProfileInformationType>(`profile/${userId}`)
        .then(response => response.data);
    },

    getStatus(userId: number) {
        return instance
        .get<string>(`profile/status/${userId}`)
        .then(response => response.data);
    },

    setStatus(status: string) {
        return instance
        .put<DefaultResponseType>(`profile/status`, { status })
        .then(response => response.data);
    }
};

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

type GetCaptchaType = {
    url: string
};

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaType>('security/get-captcha-url')
        .then(response => response.data);
    }
}