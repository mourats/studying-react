import axios from 'axios';

const api = axios.create({ baseURL: 'https://prematriculabackend.herokuapp.com/api' });

export default api;