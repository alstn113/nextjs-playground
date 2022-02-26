import { refresh } from '@/api/auth';
import axios from 'axios';

const clientPrivate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

clientPrivate.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error),
);

clientPrivate.interceptors.response.use(
  reponse => reponse,
  async error => {
    const {
      config,
      response: { status },
    } = error;
    console.log(status, error.response.data.message);
    if (error.response.status === 401) {
      const originalRequest = config;
      await refresh();
      return clientPrivate(originalRequest);
    }
    return Promise.reject(error);
  },
);

export default clientPrivate;
