import axios, { AxiosError, Canceler } from "axios";

let cancel: [string, Canceler][] = [];

export const cancelAllRequests = () => {
  cancel.map((item) => {
    item[1]();
  });
};

const baseURL = "https://fakestoreapi.com/";
export const axiosInstance = axios.create({
  baseURL,
  headers: {},
  // timeout: 5000,
});

// Add a response interceptor
axiosInstance.interceptors.request.use(
  function (response) {
    const CancelToken = axios.CancelToken;
    // const access_token = localStorage.getItem('token');

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    if (
      response.config.method === "post" ||
      (response.config.method === "POST" &&
        response.status === 200 &&
        response?.data.message)
    ) {
    }

    cancel = cancel.filter((fid) => fid[0] !== response.config.url);
    return response;
  },
  function (error: AxiosError) {
    cancel = cancel.filter((fid) => {
      if (error.response && error.response?.config) {
        return fid[0] !== error.response.config.url;
      }
      console.log("error", error.response);
    });

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
