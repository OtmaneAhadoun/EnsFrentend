import axios from 'axios';

const Maxios = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: true,
});

export default Maxios;