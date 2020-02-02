import axios from 'axios';
import { BASE_API_GIT } from '../common/constants';

const api = (baseURL = BASE_API_GIT) => axios.create({
    baseURL,
});

export default api;