import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        withCredentials: true,
        "Content-Type" : "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
});