import axios from 'axios';

export const instance = axios.create({
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

export type DefaultResponseType = {
    resultCode: ResultCodesEnum,
    messages: string[],
    data: {}
};