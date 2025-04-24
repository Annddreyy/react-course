const ADD_POST = 'social-network/profile/ADD-POST';
const SET_PROFILE_INFORMATION = 'social-network/profile/SET_PROFILE_INFORMATION';
const SET_STATUS = 'social-network/profile/SET_STATUS';

const initialState = {
    profileInformation: null,
    posts: [
        { id: 1, message: "My first post", likesCount: 12 },
        { id: 2, message: "My second post", likesCount: 21 },
        { id: 3, message: "My third post", likesCount: 8 },
    ],
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    message: action.text,
                    likesCount: 0
                }],
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

export const addPostActionCreator = (text) => ({ type: ADD_POST, text });
export const setProfileInformationActionCreator = (profileInformation) => ({ type: SET_PROFILE_INFORMATION, profileInformation });
export const setStatusActionCreator = (status) => ({ type: SET_STATUS, status });

export default profileReducer;