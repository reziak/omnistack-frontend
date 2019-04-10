import axios from 'axios';

const api = axios.create({
    baseURL: 'https://blira-omnistack-backend.herokuapp.com',
});

export default api;