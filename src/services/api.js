import axios from "axios";

const API = axios.create({
  baseURL: "https://hospital-backend-gdew.onrender.com"
});

export default API;