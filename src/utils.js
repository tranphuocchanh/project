import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
  timeout: 5000,
});
