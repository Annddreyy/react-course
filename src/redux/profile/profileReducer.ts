import { PostType, ProfileInformationType } from "../../types/types";
import { InferActionsType } from "../redux-store";

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
export type ActionTypes = InferActionsType<typeof actions>;

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case 'social-network/profile/ADD_POST':
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    message: action.text,
                    likesCount: 0
                }],
            };
        case 'social-network/profile/SET_PROFILE_INFORMATION':
            return {
                ...state,
                profileInformation: action.profileInformation
            }
        case 'social-network/profile/SET_STATUS':
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
};

export const actions = {
    addPostActionCreator: (text: string) => ({ type: 'social-network/profile/ADD_POST', text } as const),
    setProfileInformationActionCreator: (profileInformation: ProfileInformationType) => ({ type: 'social-network/profile/SET_PROFILE_INFORMATION', profileInformation } as const),
    setStatusActionCreator: (status: string) => ({ type: 'social-network/profile/SET_STATUS', status } as const),
};

export default profileReducer;