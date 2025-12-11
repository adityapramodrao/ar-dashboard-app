import axios from "axios";

const API_URL = axios.create({
    baseURL : "https://dummyjson.com",
    headers: { "Content-Type": "application/json" },
});

// API_URL.interceptors.request.use((config) => {
//     const token = localStorage.getItem("accessToken");
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//     return config
// })

export default API_URL;