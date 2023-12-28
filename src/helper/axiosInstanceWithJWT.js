import axios from "axios";
import BASE_URL from "./url";

// Function to get the token from localStorage
const getToken = () => {
  const { token } = JSON.parse(localStorage.getItem("user"));
  return token ? token : null;
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Axios interceptor to set Authorization header for every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
