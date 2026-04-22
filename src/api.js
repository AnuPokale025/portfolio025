import axios from 'axios';
const deploy_url = 'https://portfolio-backend-qnp3.onrender.com';

const api = axios.create({
  baseURL: deploy_url || 'http://localhost:4000',
    timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
const baseURL = deploy_url;

export default api;
