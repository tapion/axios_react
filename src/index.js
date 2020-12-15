import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';

axios.interceptors.request.use(request => {
    console.log('Request interceptor', request);
    return request;
}, error => {
    console.log('Error request interceptor', error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log('Response interceptor', response);
    return response;
}, err => {
    console.log('Error response interceptor', err);
    return Promise.reject(err)
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
