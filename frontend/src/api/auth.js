import api from './axios';

export const authAPI = {
    signup: async (userData) => {
        const response = await api.post('/user/signup', userData);
        return response.data;
    },

    login: async (credentials) => {
        const response = await api.post('/user/login', credentials);
        return response.data;
    },
};
