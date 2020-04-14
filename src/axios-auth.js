import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1',
    headers: { 'Content-Type': 'application/json' }
});

instance.interceptors.request.use((config) => {
    config.url = `${config.url}?key=AIzaSyCg2G03nU9kOdvi_TLtguhq1KE7Zyt7C2M`

    return config;
});

export default instance;