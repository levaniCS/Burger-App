import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerapp-67571.firebaseio.com/'
});

export default instance;