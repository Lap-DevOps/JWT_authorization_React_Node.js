import axious from 'axios';

export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';


const $api = axious.create({
    withCredentials: true,
    baseURL: API_URL
});


$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});


export default $api;