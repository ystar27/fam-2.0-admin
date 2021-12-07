import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:4000/api/v2",
	headers: {
		"Content-Type": "application/json",
	},
});

// const instance = axios.create({
//   baseURL: "https://testapi.femaleandmore.org/api/v2",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

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
