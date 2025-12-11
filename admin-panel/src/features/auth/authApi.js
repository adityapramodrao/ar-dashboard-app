import axios from "axios";


const API_URL = axios.create({
    baseURL : "https://dummyjson.com",
    headers: { "Content-Type": "application/json" },
});

API_URL.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

API_URL.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Session expired
      alert("Session expired. Please login again.");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      window.location.href = "/"; // redirect
    }
    return Promise.reject(error);
  }
);

export default API_URL;

