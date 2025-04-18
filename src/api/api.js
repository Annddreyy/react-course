import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '71ee9618-84e0-4c45-b11e-f17709b94742'
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
    },
    unfollowUser(userId) {
        return instance
        .delete(`follow/${userId}`)
        .then(response => response.data);
    },
    followUser(userId) {
        return instance
        .post(`follow/${userId}`, {})
        .then(response => response.data)
    }
};

export const profileAPI = {
    getProfileInformation(userId) {
        debugger;
        return instance
        .get(`profile/${userId}`)
        .then(response => response.data)
    }
};

export const authAPI = {
    authUser() {
        return instance.get('auth/me')
        .then(response => response.data)
    }
};

