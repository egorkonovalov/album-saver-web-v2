import axios, { type AxiosInstance } from "axios";
// import httpCommon from "src/httpCommon";
export default function createRequest(): AxiosInstance {
  return axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, //TODO: move to httpCommon
    headers: {
      "Content-Type": "application/json",
      'charset': 'utf-8'
    }
  });
}
