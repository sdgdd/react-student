import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

instance.interceptors.request.use(
  function (config) {
    console.log("=======>interceptors.request");
    return config;
  },
  function (error) {
    // return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    console.log("=======>interceptors.response");
    return response;
  },
  function (error) {
    // return Promise.reject(error);
  }
);

export default instance;
