import axios from 'axios';

const api = axios.create({
  baseURL: 'https://la-vita-back.onrender.com/',
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestCreateAccount = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export default api;
