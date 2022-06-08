import axios, { AxiosError } from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";

const BACKEND_URL = "http://10.0.2.2:3333";

const apiIFBANK = axios.create({
  baseURL: BACKEND_URL,
});

const setUpAuthToken = async () => {
  const AUTH_TOKEN = await AsyncStorage.getItem("auth_token");

  if (!AUTH_TOKEN) return;

  apiIFBANK.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
    AUTH_TOKEN
  )}`;
};

export { apiIFBANK, setUpAuthToken };
