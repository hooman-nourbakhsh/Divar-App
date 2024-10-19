import axios from "axios";
import { getNewToken } from "services/token";
import { getCookie, setCookie } from "utils/cookie";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry && originalRequest.url === "user/whoami") {
      originalRequest._retry = true;
      const res = await getNewToken();
      if (!res?.response) return;
      setCookie(res.response.data);
      return api(originalRequest);
    } else {
      return Promise.reject(error);
    }
  }
);

export default api;
