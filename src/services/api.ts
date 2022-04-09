import axios, { AxiosError } from "axios";

const BACKEND_URL = "http://localhost:8080";

const apiIFBANK = axios.create({
  baseURL:
    BACKEND_URL,
});

export { apiIFBANK };