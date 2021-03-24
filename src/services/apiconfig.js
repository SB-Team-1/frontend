import axios from "axios";

const baseUrl = "https://sb-alliance-api.herokuapp.com";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
