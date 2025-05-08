import { instance, DefaultResponseType } from "./api.ts";
import { ProfileInformationType } from "../types/types";

export const profileAPI = {
    getProfileInformation(userId: number) {
        return instance
        .get<ProfileInformationType>(`profile/${userId}`)
        .then(response => response.data);
    },

    getStatus(userId: number) {
        return instance
        .get<string>(`profile/status/${userId}`)
        .then(response => response.data);
    },

    setStatus(status: string) {
        return instance
        .put<DefaultResponseType>(`profile/status`, { status })
        .then(response => response.data);
    }
};