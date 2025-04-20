import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setUserDataActionCreator = (userId, email, login) => ({
    type: SET_USER_DATA,
    data: { userId, email, login }
});

function authUser(dispatch) {
    authAPI.authUser()
    .then(response => {
        if (response.resultCode === 0) {
            let { id, email, login } = response.data;
            dispatch(setUserDataActionCreator(id, email, login));
        }
    });
}

export const authUserThunkCreator = () => (dispatch) => {
    authUser(dispatch);
};

export const loginUserThunkCreator = (email, password, remember) => (dispatch) => {
    authAPI.loginUser(email, password, remember || false)
    .then(response => {
        if (response.resultCode === 0) {
            authUser(dispatch);
        } else {
            alert('Неверный логин или пароль!');
        }
    });
};

export default authReducer;
