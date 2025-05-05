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
        .then(response => response.data);
    }
};

export const profileAPI = {
    getProfileInformation(userId) {
        return instance
        .get(`profile/${userId}`)
        .then(response => response.data);
    },
    getStatus(userId) {
        return instance
        .get(`profile/status/${userId}`)
        .then(response => response.data);
    },
    setStatus(status) {
        return instance
        .put(`profile/status`, { status })
        .then(response => response.data);
    }
};

export const authAPI = {
    authUser() {
        return instance.get('auth/me')
        .then(response => response.data);
    },
    loginUser(email, password, rememberMe = false, captcha = null) {
        debugger;
        return instance
        .post('auth/login', { email, password, rememberMe, captcha })
        .then(response => response.data);
    },
    logoutUser() {
        return instance
        .delete('auth/login')
        .then(response => response.data);
    }
};

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
        .then(response => response.data);
    }
}