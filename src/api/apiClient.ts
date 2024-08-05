import axios from 'axios';

export const API_KEY = 'NHKNUhI53ZApF4IXCOX1DpUj2YTSl2U1';

const apiClient = axios.create({
    baseURL: 'https://api.currencybeacon.com/v1/',
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        api_key: API_KEY,
    },
});

export default apiClient;
