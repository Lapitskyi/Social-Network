import * as axios from "axios";


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": "1756591b-fc01-4a70-b76d-c7566231808a"},
});


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    getCurrentPage(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    userFollow(id){
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })

    },
    userUnFollow(id){
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })

    },
    getProfile(userId){
        return instance.get(`/profile/${userId}`)
            .then(response => {
                return response.data
            })
    }
};

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }

};






