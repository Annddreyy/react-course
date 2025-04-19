import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 21,
    currentPage: 4,
    isFetching: true,
    followingInProgress: false
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        user.followed = true;
                        return { ...user, followed: true }
                    }
                    return user;
                } )
            }
        case UNFOLLOW:
            debugger;
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                } )
            }
        case SET_USERS:
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

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const setIsFetching = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching })
export const toogleIsFollowingProgress = (followingInProgress) => ({ type: TOOGLE_IS_FOLLOWING_PROGRESS, followingInProgress });

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
    dispatch(setIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize)
    .then((response) => {
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(100));
        dispatch(setIsFetching(false));
    });
};

export const followingThunkCreator = (userId) => (dispatch) => {
    usersAPI.followUser(userId)
    .then(response => {
    if (response.resultCode === 0) {
        dispatch(follow(userId));
        dispatch(toogleIsFollowingProgress(false));
    }});
}

export const unfollowingThunkCreator = (userId) => (dispatch) => {
    usersAPI.unfollowUser(userId)
    .then(response => {
        if (response.resultCode === 0) {
            dispatch(unfollow(userId));
            dispatch(toogleIsFollowingProgress(false));
        }
    });
}

export default usersReducer;