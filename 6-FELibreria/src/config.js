import axios from 'axios';

export const configUrl = {
  apiUrl: 'http://127.0.0.1:3000/api/v1/',
};

export const apiClient = axios.create();

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
