import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_PROFILE_INFORMATION = 'SET_PROFILE_INFORMATION';
const SET_STATUS = 'SET_STATUS';

const initialState = {
    profileInformation: null,
    posts: [
        { id: 1, message: "My first post", likesCount: 12 },
        { id: 2, message: "My second post", likesCount: 21 },
        { id: 3, message: "My third post", likesCount: 8 },
    ],
    postText: '12324324',
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    message: state.postText,
                    likesCount: 0
                }],
                postText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                postText: action.postText
            };
        case SET_PROFILE_INFORMATION:
            return {
                ...state,
                profileInformation: action.profileInformation
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updatePostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    postText: text
});

export const setProfileInformationActionCreator = (profileInformation) => ({
    type: SET_PROFILE_INFORMATION,
    profileInformation
});

export const setStatusActionCreator = (status) => ({
    type: SET_STATUS,
    status
});



export const setProfileThunkCreator = (userId) => (dispatch) =>  {
    profileAPI.getProfileInformation(userId)
    .then(response => dispatch(setProfileInformationActionCreator(response)));
};

export const getStatusThunkCreator = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
    .then(response => dispatch(setStatusActionCreator(response)));
};

export const updateStatusThunkCreator = (status) => (dispatch) => {
    profileAPI.setStatus(status)
    .then(response => {
        if (response.resultCode === 0) {
            dispatch(setStatusActionCreator(status));
        }
    });
};

export default profileReducer;