const SET_USER_DATA = 'social-network/auth/SET_USER_DATA';
const GET_CAPTCHA = 'social-network/auth/GET_CAPTCHA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
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
}

export const setUserDataActionCreator = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth }
});

export const setCaptchaUrl = (url) => ({ type: GET_CAPTCHA, url });

export default authReducer;
