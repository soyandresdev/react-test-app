import axios from 'axios';
import { create } from 'apisauce';

// Define axios api instance
const instance = axios.create();

instance.interceptors.request.use((request) => {
  if (process.env.NODE_ENV !== 'production')
    console.log('%c ---Starting Request', 'color: blue', request);
  // TODO: Start Loading Toast
  return request;
});

instance.interceptors.response.use(
  (response) => {
    if (process.env.NODE_ENV !== 'production')
      console.log('%c ---Ending Response', 'color: green', response);
    // TODO: Dismiss Loading Toast
    return response;
  },
  (error) => {
    if (process.env.NODE_ENV !== 'production')
      console.log('%c ---Error Response', 'color: red', error.response);
    // TODO: Dismiss Loading Toast
    // TODO: Show Error Toast
    return Promise.reject(error);
  }
);

instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.defaults.headers.common.Accept = 'application/json';
instance.defaults.headers.common['Accept-Language'] = 'en'; // TODO: Get current language

// Set a token header
export const setTokenHeader = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Remove a token header
export const removeTokenHeader = () => {
  delete instance.defaults.headers.common.Authorization;
};

// Define Api Sauce Instance
const apisauceInstance = create({ instance });

export default apisauceInstance;
