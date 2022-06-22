import axios from "axios";

const BASE_URL = process.env.NODE_ENV === "development" ? process.env.DEV_BASE_URL : process.env.PRD_BASE_URL ;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token: string) => {
	if (typeof window !== "undefined") {
		instance.defaults.headers.common["Authorization"] = token;
		window.localStorage.setItem("authorization", token);
	}
};

export const DeleteAuthToken = () => {
	if (typeof window !== "undefined") {
		window.localStorage.removeItem("authorization");
		axios.defaults.headers["Authorization"] = "";
	}
};

instance.interceptors.request.use(function (config) {
	if (typeof window !== "undefined") {
		const token = window.localStorage.getItem("authorization");
		config.headers.Authorization = token || null;
		return config;
	}
});

export default instance;
