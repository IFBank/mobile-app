import axios, { AxiosError } from "axios";

import AsyncStorage from '@react-native-async-storage/async-storage';

const BACKEND_URL = "https://18e5-2804-1b3-8200-848e-85d5-1fdb-8a0b-baea.ngrok.io/";

const apiIFBANK = axios.create({
  baseURL:
    BACKEND_URL,
});

const setUpAuthToken = async ()  =>{
  const AUTH_TOKEN = await AsyncStorage.getItem('auth_token');

  if (!AUTH_TOKEN) return;

  apiIFBANK.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(
    AUTH_TOKEN
  )}`;
}

export { 
  apiIFBANK,
  setUpAuthToken
};