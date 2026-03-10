import axios from "axios";

const api = axios.create({
  baseURL: "https://sql-studio-backend-jjip.onrender.com"
});

export default api;