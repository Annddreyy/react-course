import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form'

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
                ...action.payload
            }
        default:
            return state;
    }
}

export const setUserDataActionCreator = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth }
});

export const authUserThunkCreator = () => (dispatch) => {
    return authAPI.authUser()
    .then(response => {
        if (response.resultCode === 0) {
            let { id, email, login } = response.data;
            dispatch(setUserDataActionCreator(id, email, login, true));
        }
    });
}

export const loginUserThunkCreator = (email, password, remember) => (dispatch) => {
    authAPI.loginUser(email, password, remember || false)
    .then(response => {
        if (response.resultCode === 0) {
            dispatch(authUserThunkCreator());
        } else {
            let message = response.messages.length > 0 ? response.messages[0] : 'Ошибка!';
            dispatch(stopSubmit('login', { _error: message } ));
        }
    });
};

export const logoutUserThunkCreator = () => (dispatch) => {
    authAPI.logoutUser()
    .then(response => {
        if (response.resultCode === 0) {
            dispatch(setUserDataActionCreator(null, null, null, false));
        }
    })
}

export default authReducer;
