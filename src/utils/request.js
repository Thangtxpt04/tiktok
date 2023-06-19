import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, opition = {}) => {
    const response = await request.get(path, opition);
    return response.data;
};

export default request;
