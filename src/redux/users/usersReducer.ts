import { UserType } from "../../types/types";
import { updateObjectInArray } from "../../utils/object-helpers";
import { InferActionsType } from "../redux-store";

let initialState = {
    users: [] as UserType[],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false,
    filter: {
        term: '',
        friend: 'null' as null | 'true' | 'false'
    }
};

export type InitialStateType = typeof initialState;
export type FilterType = typeof initialState.filter;
export type ActionTypes = InferActionsType<typeof actions>;

const usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch(action.type) {
        case 'social-network/users/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
            }
        case 'social-network/users/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
            }
        case 'social-network/users/SET_USERS':
            return {
                ...state,
                users: [...action.users]
            }
        case 'social-network/users/SET_CURRENT_PAGE':
            return { ...state, currentPage: action.currentPage }
        case 'social-network/users/SET_TOTAL_USERS_COUNT':
            return { ...state, totalUsersCount: action.totalUsersCount } 
        case 'social-network/users/TOOGLE_IS_FETCHING':
            return { ...state, isFetching: action.isFetching }
        case 'social-network/users/TOOGLE_IS_FOLLOWING_PROGRESS':
            return { ...state, followingInProgress: action.followingInProgress }
        case 'social-network/users/SET_FILTER':
            return { ...state, filter: action.filter }
        default:
            return state;
    }
};


export const actions = {
    follow: (userId: number) => ({ type: 'social-network/users/FOLLOW', userId } as const),
    unfollow: (userId: number) => ({ type: 'social-network/users/UNFOLLOW', userId } as const),
    setUsers: (users: UserType[]) => ({ type: 'social-network/users/SET_USERS', users } as const),
    setCurrentPage: (currentPage: number) => ({ type: 'social-network/users/SET_CURRENT_PAGE', currentPage } as const),
    setTotalUsersCount: (totalUsersCount: number) => ({ type: 'social-network/users/SET_TOTAL_USERS_COUNT', totalUsersCount } as const),
    setIsFetching: (isFetching: boolean) => ({ type: 'social-network/users/TOOGLE_IS_FETCHING', isFetching } as const),
    toogleIsFollowingProgress: (followingInProgress: boolean) => ({ type: 'social-network/users/TOOGLE_IS_FOLLOWING_PROGRESS', followingInProgress } as const),
    setFilter: (filter: FilterType) => ({ type: 'social-network/users/SET_FILTER', filter } as const)
}


export default usersReducer;