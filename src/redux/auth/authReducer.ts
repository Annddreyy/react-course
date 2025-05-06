const SET_USER_DATA = 'social-network/auth/SET_USER_DATA';
const GET_CAPTCHA = 'social-network/auth/GET_CAPTCHA';

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case GET_CAPTCHA:
            return {
                ...state,
                captchaUrl: action.url
            }
        default:
            return state;
    }
};

type SetUserDataPayloadType = {
    userId: number,
    email: string,
    login: string,
    isAuth: boolean
};

type SetUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetUserDataPayloadType
};

export const setUserDataActionCreator = (userId: number, email: string, login: string, isAuth: boolean): SetUserDataActionType => ({
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth }
});


type SetCaptchaUrlType = {
    type: typeof GET_CAPTCHA,
    url: string
};

export const setCaptchaUrl = (url: string): SetCaptchaUrlType => ({ type: GET_CAPTCHA, url });

export default authReducer;
