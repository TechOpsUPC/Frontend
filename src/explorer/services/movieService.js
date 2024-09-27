import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/RaulQuispe/pruebaFakeAPI',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getMovies() {
        return apiClient.get('/movies');
    },
    getRecentMovies() {
        return apiClient.get('/movies-recent');
    }
};
