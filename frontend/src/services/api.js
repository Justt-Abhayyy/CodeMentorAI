import axios from "axios";

const api = axios.create({

  baseURL: "https://codementorai-1-hdhx.onrender.com",

  headers: {
    "Content-Type": "application/json"
  }

});

api.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

  const publicRoutes = [
    "/api/users/login",
    "/api/users/register"
  ];

  const isPublicRoute = publicRoutes.some(route =>
    config.url?.includes(route)
  );

  if (token && !isPublicRoute) {

    config.headers.Authorization = `Bearer ${token}`;

  }

  return config;

});

export default api;