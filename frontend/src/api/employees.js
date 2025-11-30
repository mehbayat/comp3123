import api from './axios';

export const employeeAPI = {
    getAll: async () => {
        const response = await api.get('/emp/employees');
        return response.data;
    },

    getById: async (id) => {
        const response = await api.get(`/emp/employees/${id}`);
        return response.data;
    },

    create: async (formData) => {
        const response = await api.post('/emp/employees', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    },

    update: async (id, formData) => {
        const response = await api.put(`/emp/employees/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    },

    delete: async (id) => {
        const response = await api.delete(`/emp/employees?eid=${id}`);
        return response.data;
    },

    search: async (params) => {
        const queryParams = new URLSearchParams();
        if (params.department) queryParams.append('department', params.department);
        if (params.position) queryParams.append('position', params.position);

        const response = await api.get(`/emp/employees/search?${queryParams.toString()}`);
        return response.data;
    },
};
