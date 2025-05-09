import { InferActionsType } from "../redux-store";

let initialState = {
    userId: 0,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};

export type InitialStateType = typeof initialState;
export type ActionTypes = InferActionsType<typeof actions>;

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case 'social-network/auth/SET_USER_DATA':
            return {
                ...state,
                ...action.payload
            }
        case 'social-network/auth/GET_CAPTCHA':
            return {
                ...state,
                captchaUrl: action.url
            }
        default:
            return state;
    }
};

export const actions = {
    setUserDataActionCreator: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'social-network/auth/SET_USER_DATA',
        payload: { userId, email, login, isAuth }
    } as const),
    setCaptchaUrl: (url: string) => ({ type: 'social-network/auth/GET_CAPTCHA', url } as const)
};

export default authReducer;
