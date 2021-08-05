import axios from "axios";

let http = axios.create({
    baseurl: "http://localhost:8000"
});

http.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.common["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default http;
