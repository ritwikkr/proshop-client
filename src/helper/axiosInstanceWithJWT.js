import axios from "axios";
import BASE_URL from "./url";

const user = JSON.parse(localStorage.getItem("user"));
const axiosInstanceWithJWT = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${user?.token}`,
    "Content-Type": "application/json",
  },
});

export default axiosInstanceWithJWT;
