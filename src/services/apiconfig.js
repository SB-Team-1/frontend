import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://sballiance.herokuapp.com"
    : "http://localhost:7165";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
