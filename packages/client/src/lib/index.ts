import axios from 'axios';

export const service = axios.create({
  baseURL: import.meta.env.VITE_SERVICE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
