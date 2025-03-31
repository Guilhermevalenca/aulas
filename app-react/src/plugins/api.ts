import Axios from 'axios';

const api = Axios.create({
    baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost',
    withCredentials: false,
    withXSRFToken: false,
});

export default api;