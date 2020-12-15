import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com'
})

instance.defaults.headers.common['Authorization'] = 'Esto es una prueba';

export default instance;