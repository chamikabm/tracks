import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  baseURL: 'http://c78fc949.ngrok.io',
});

instance.interceptors.request.use(
  async (config) => {
    // This function gets called before each function send to the server.
    const token = await AsyncStorage.getItem('token');
    if(token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
