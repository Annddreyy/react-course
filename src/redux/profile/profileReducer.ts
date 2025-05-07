const ADD_POST = 'social-network/profile/ADD-POST';
const SET_PROFILE_INFORMATION = 'social-network/profile/SET_PROFILE_INFORMATION';
const SET_STATUS = 'social-network/profile/SET_STATUS';

type PostType = {
    id: number,
    message: string,
    likesCount: number
};

type ProfileInformationType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType
};

type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
};

type PhotosType = {
    small: string,
    large: string
};

const initialState = {
    profileInformation: null as ProfileInformationType | null,
    posts: [
        { id: 1, message: "My first post", likesCount: 12 },
        { id: 2, message: "My second post", likesCount: 21 },
        { id: 3, message: "My third post", likesCount: 8 },
    ] as PostType[],
    status: null as string | null
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
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

type AddPostActionType = {
    type: typeof ADD_POST,
    text: string
};

export const addPostActionCreator = (text: string): AddPostActionType => ({ type: ADD_POST, text });

type SetProfileInformationActionType = {
    type: typeof SET_PROFILE_INFORMATION,
    profileInformation: ProfileInformationType
};

export const setProfileInformationActionCreator = (profileInformation: ProfileInformationType): SetProfileInformationActionType => ({ type: SET_PROFILE_INFORMATION, profileInformation });

type SetStatusActionType = {
    type: typeof SET_STATUS,
    status: string
};

export const setStatusActionCreator = (status: string): SetStatusActionType => ({ type: SET_STATUS, status });

export default profileReducer;