import axios from 'axios';

let urls = {
    test: 'http://localhost:5001',
    development: 'http://localhost:5000',
    production: 'http://localhost:5000'
}

const api = axios.create({
    baseURL: urls[process.env.NODE_ENV]
});

export { api };