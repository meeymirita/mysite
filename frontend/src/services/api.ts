import axios from 'axios';
export const API_ROUTES = {
    user: `user`,
    tech: `user/tech-list`,
};
export const httpClient = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 10000,
    withCredentials: true
});
