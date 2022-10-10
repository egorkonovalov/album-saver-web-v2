import axios from "axios";
import httpCommon from "src/httpCommon";

export default function createRequest() {
  return axios.create({
    baseURL: httpCommon.baseURL,
    headers: {
      "Content-type": "application/json",
    }
  });
}
