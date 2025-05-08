import { instance, DefaultResponseType } from "./api.ts";
import { UserType } from "../types/types";

type GetUsersType = {
    items: UserType[],
    totalCount: number,
    error: string | null
};

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance
        .get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
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
