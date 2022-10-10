import axios from "axios";
// import httpCommon from "src/httpCommon";

export default function createRequest() {
  return axios.create({
    baseURL: "https://localhost:44356/", //TODO: move to httpCommon
    headers: {
      "Content-type": "application/json",
    }
  });
}
