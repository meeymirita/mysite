import axios from 'axios';
export const API_ROUTES = {
    user: `user`,
};
export const httpClient = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 10000,
});

// {
//     "id": 1,
//     "createdAt": "2026-05-09T12:12:03.060Z",
//     "fullName": "Никита",
//     "userName": "mirita",
//     "profession": "backend developer at Контур",
//     "experience": "1 year experience",
//     "age": 22,
//     "city": "Новосибирск",
//     "stack": "PHP / Vue"
// }