import { instance, DefaultResponseType } from "./api";
import { UserType } from "../types/types";

type GetUsersType = {
    items: UserType[],
    totalCount: number,
    error: string | null
};

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number, term = '', friend: null | string = null) {
        return instance
        .get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}&term=${term}&friend=${friend}`)
        .then(response => response.data);
    },

    followUser(userId: number) {
        return instance
        .post<DefaultResponseType>(`follow/${userId}`, {})
        .then(response => response.data);
    },

    unfollowUser(userId: number) {
        return instance
        .delete<DefaultResponseType>(`follow/${userId}`)
        .then(response => response.data);
    }
};
