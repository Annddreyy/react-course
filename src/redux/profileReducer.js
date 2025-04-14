const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_PROFILE_INFORMATION = 'SET_PROFILE_INFORMATION';

const initialState = {
    profileInformation: null,
    posts: [
        { id: 1, message: "My first post", likesCount: 12 },
        { id: 2, message: "My second post", likesCount: 21 },
        { id: 3, message: "My third post", likesCount: 8 },
    ],
    postText: '12324324'
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
})

export default profileReducer;