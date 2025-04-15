import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '71ee9618-84e0-4c45-b11e-f17709b94742'
    }
});

export const usersAPI = {
    getUsersAPI(currentPage, pageSize) {
        return instance
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
    }
}
