import axios from 'axios';

const urls = {
    test: 'http://localhost:5001',
    development: 'https://api.onlinefactura.uz',
    production: 'http://localhost:5000'
}

const api = axios.create({
    baseURL: urls[process.env.NODE_ENV]
});

export { api };