import { updateObjectInArray } from "../../utils/object-helpers";

const FOLLOW = 'social-network/users/FOLLOW';
const UNFOLLOW = 'social-network/users/UNFOLLOW';
const SET_USERS = 'social-network/users/SET-USERS';
const SET_CURRENT_PAGE = "social-network/users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = 'social-network/users/SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'social-network/users/TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRESS = 'social-network/users/TOOGLE_IS_FOLLOWING_PROGRESS';

export type InitialStateType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: boolean
};

type UserType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean
};

type PhotosType = {
    small: string,
    large: string
};

let initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false
};

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
            }
        case SET_USERS:
            debugger;
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount } 
        case TOOGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        default:
            return state;
    }
};

type FollowType = {
    type: typeof FOLLOW,
    userId: number
};

export const follow = (userId: number): FollowType => ({ type: FOLLOW, userId });

type UnfollowType = {
    type: typeof UNFOLLOW,
    userId: number
};

export const unfollow = (userId: number): UnfollowType => ({ type: UNFOLLOW, userId });

type SetUsersType = {
    type: typeof SET_USERS,
    users: UserType[]
};

export const setUsers = (users: UserType[]): SetUsersType => ({ type: SET_USERS, users });

type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
};

export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({ type: SET_CURRENT_PAGE, currentPage });

type SetTotalUsersCount = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalUsersCount: number
};

export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });

type SetIsFetching = {
    type: typeof TOOGLE_IS_FETCHING;
    isFetching: boolean
};

export const setIsFetching = (isFetching: boolean): SetIsFetching => ({ type: TOOGLE_IS_FETCHING, isFetching });

type ToogleIsFollowingProgress = {
    type: typeof TOOGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress: boolean
};

export const toogleIsFollowingProgress = (followingInProgress: boolean): ToogleIsFollowingProgress => ({ type: TOOGLE_IS_FOLLOWING_PROGRESS, followingInProgress });

export default usersReducer;