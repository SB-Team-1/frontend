import axios from "axios";

const baseUrl = "https://sb-alliance-backend.herokuapp.com";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
