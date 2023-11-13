// axiosInstanceWithJWT.js
import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));
const axiosInstanceWithJWT = axios.create({
  baseURL: "http://localhost:4000/api/v1", // Replace with your API base URL
  headers: {
    Authorization: `Bearer ${user?.token}`,
    "Content-Type": "application/json",
  },
});

export default axiosInstanceWithJWT;
