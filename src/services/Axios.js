import axios from "axios";
import TokenService from "./TokenService";

const token = TokenService.getToken();

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${token}`,
  },
  withCredentials: false,
});

export default axiosClient;
