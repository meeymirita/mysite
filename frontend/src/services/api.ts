import axios from 'axios';

export const API_ROUTES = {
    user: `user`,
    tech: `user/tech-list`,
    socials: `user/socials`,
    about: `user/about`,
};

export const httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    withCredentials: true
});