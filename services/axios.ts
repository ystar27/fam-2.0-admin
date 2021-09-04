import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/api/v2",
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token: any) => {
  token
    ? (axios.defaults.headers["x-access-token"] = token)
    : (axios.defaults.headers["x-access-token"] = "");
};

export const DeleteAuthToken = () => {
  window.localStorage.removeItem("accessToken");
  axios.defaults.headers["x-access-token"] = "";
};

export default instance;
